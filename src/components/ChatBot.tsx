import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Phone, Mail, ChevronDown, Star } from 'lucide-react';
import { submitToHubSpot } from '../utils/hubspot';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  buttons?: string[];
}

interface LeadForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadForm, setLeadForm] = useState<LeadForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcomeButtons, setShowWelcomeButtons] = useState(true);
  const [chatEnded, setChatEnded] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState(0);
  const [sessionId, setSessionId] = useState('');
  const [showConversationHistory, setShowConversationHistory] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const departments = [
    'DBA Dissertation Coaching & Mentoring',
    'Research Methodology Support', 
    'Thesis Writing Assistance',
    'Data Analysis Help',
    'General Inquiry'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Generate or get session ID
      const currentSessionId = localStorage.getItem('chatSessionId') || 
        'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('chatSessionId', currentSessionId);
      setSessionId(currentSessionId);
      
      // Load conversation history
      loadConversationHistory();
      
      // Check if there's existing conversation
      loadExistingConversation(currentSessionId);
    }
  }, [isOpen]);
  
  const loadConversationHistory = async () => {
    try {
      const response = await fetch('/api/chat/conversations');
      if (response.ok) {
        const history = await response.json();
        setConversationHistory(history);
      }
    } catch (error) {
      console.error('Failed to load conversation history:', error);
    }
  };
  
  const loadExistingConversation = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/chat/conversations/${sessionId}`);
      if (response.ok) {
        const conversation = await response.json();
        if (conversation.messages && conversation.messages.length > 0) {
          const formattedMessages = conversation.messages.map((msg: any, index: number) => ({
            id: `${sessionId}_${index}`,
            text: msg.text,
            isBot: msg.from === 'bot',
            timestamp: new Date(msg.at)
          }));
          setMessages(formattedMessages);
          return;
        }
      }
    } catch (error) {
      console.error('Failed to load existing conversation:', error);
    }
    
    // If no existing conversation, show welcome message
    const welcomeMessage: Message = {
      id: '1',
      text: "Welcome to DBA Dissertation Coach! My name is Dr Alex👋 \n How can I make your DBA Dissertation journey better today? 🤔",
      isBot: true,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  };

  const handleWelcomeButtonClick = (buttonText: string) => {
    setShowWelcomeButtons(false);
    setShowLeadForm(true);
  };

  const handleButtonClick = (buttonText: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: buttonText,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Handle different button responses
    if (buttonText.includes('Book Immediate Call')) {
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "Perfect! Here's your direct booking link:\n\n📅 https://calendly.com/researchmentorclinic1/doctorate-call\n\nOur DBA success team will provide you with a personalized roadmap during the call. Looking forward to helping you achieve your doctorate goals! 🎓",
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    } else if (buttonText.includes('Get Free Resources')) {
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "Excellent choice! 🎁\n\nI'm sending you our '7 DBA Success Strategies' guide (worth $497) - absolutely FREE!\n\nThis includes:\n✅ Speed Reading Method\n✅ Note-Taking System\n✅ Time Blocking Template\n✅ Research Question Formula\n✅ Data Collection Shortcuts\n✅ Writing Framework\n✅ Defense Preparation Guide\n\nCheck your email in the next few minutes!",
          isBot: true,
          timestamp: new Date(),
          buttons: ['📞 Book Strategy Call', '❓ I have another question']
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1500);
    } else if (buttonText.includes('Ask Questions') || buttonText.includes('I have another question')) {
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "How can I assist you today? 😊\n\nPlease type your question here in the chat👇, and I'll do my best to provide you with the information you're looking for.",
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    } else if (buttonText.includes('Book Strategy Call')) {
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "Perfect! Book your FREE DBA Strategy Call here:\n\n📅 https://calendly.com/researchmentorclinic1/doctorate-call\n\nDuring this call, we'll:\n1️⃣ Analyze your current situation\n2️⃣ Identify your biggest obstacles\n3️⃣ Create a personalized roadmap\n4️⃣ Show you how to finish while maintaining career & family\n\nNo pressure, just clarity! 🎯",
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1500);
    }
  };

  const isInappropriateMessage = (input: string): boolean => {
    const inappropriateWords = ['fuck', 'shit', 'damn', 'bitch', 'asshole'];
    const lowerInput = input.toLowerCase();
    return inappropriateWords.some(word => lowerInput.includes(word));
  };

  const getBotResponse = (userInput: string): { text: string; buttons?: string[]; showForm?: boolean } => {
    const input = userInput.toLowerCase();
    
    // Check for inappropriate messages only
    if (isInappropriateMessage(input)) {
      return {
        text: "I apologize, but I can only assist with DBA coaching and research-related queries. To get personalized help from our team, please fill out this quick form.",
        showForm: true
      };
    }
    
    // Handle course/program related questions
    if (input.includes('course') || input.includes('program') || input.includes('service') || input.includes('offer') || input.includes('provide')) {
      return {
        text: "Great question! 📚 DBA Coach offers three comprehensive programs:\n\n👨🎓 **1:1 Doctorate Coaching**\nPerfect for professionals who have time to work on their DBA and want expert guidance at every step. Includes private strategy calls, step-by-step research guidance, and personalized support.\n\n🚀 **Doctorate Achiever Program** (Most Popular)\nBest for busy scholars who need complete start-to-finish support. Covers everything from topic selection to defense preparation with dedicated research mentors.\n\n⚡ **Time Saver Services**\nIdeal for those who've written most chapters and need professional academic finishing - editing, formatting, data analysis, and defense preparation.\n\nWhich program interests you most?",
        buttons: ['📞 Book Strategy Call', '🎁 Get Free Resources', '❓ Tell me more']
      };
    }
    
    // DBA Coach specific responses based on kb.json
    if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
      return {
        text: "Hi! Welcome to DBA Dissertation Coach - World's #1 for Doctorate of Business Administration Dissertation Success! 🎓 We help smart executives finish their DBA Dissertation while keeping their career and family happy. How can I help you today?",
        buttons: ['📞 Book Strategy Call', '🎁 Get Free Resources', '❓ I have another question']
      };
    }
    
    if (input.includes('dba coach') || input.includes('about')) {
      return {
        text: "DBA Coach is the World's #1 for DBA Success with exclusive support for Doctorate of Business Administration students worldwide. Our impressive track record:\n\n🏆 100+ DBAs completed\n🎯 98% success rate\n📚 250+ years team experience\n🌍 1000+ students in 18+ countries\n⭐ 4.9/5 star rating\n⚡ 50% faster completion\n📝 120+ published papers\n🛟 24/7 support\n\nWe only accept 12 students per month to ensure personalized attention!\n\nOur three main services are:\n\n👨‍🎓 1:1 Doctorate Coaching - Perfect for professionals who have time to work on their DBA and want expert guidance at every step.\n\n🚀 Doctorate Achiever Program - Best for busy scholars who are running out of time and need complete start-to-finish support.\n\n⚡ Time Saver Services - Ideal for those who've written most chapters and need fast, polished, professional academic finishing.",
        buttons: ['📞 Book Strategy Call', '🎁 Get Free Resources']
      };
    }
    
    if (input.includes('system') || input.includes('method') || input.includes('how it works')) {
      return {
        text: "The Simple 4-Step System That Works:\n\n📚 STEP 1 - Learn Fast: Watch our simple video courses that break down complex research into easy steps\n👨🏫 STEP 2 - Get Guided: Your personal mentor meets with you every 2 weeks\n👥 STEP 3 - Join Others: Monthly group calls with other DBA students\n⚡ STEP 4 - Save Time: We handle formatting, citations, and technical details. Save 20+ hours per week!",
        buttons: ['📞 Book Strategy Call', '❓ I have another question']
      };
    }
    
    if (input.includes('success rate') || input.includes('results')) {
      return {
        text: "We have a 98% success rate! Here are the numbers:\n\n✅ 100+ DBAs completed\n✅ 250+ years of team experience\n✅ 120+ published papers\n✅ 50% faster completion\n✅ 1000+ students in 18+ countries\n✅ 4.9/5 stars from graduates\n✅ 24/7 support available\n\nReal results from real people!",
        buttons: ['📞 Book Strategy Call', '🎁 Get Free Resources']
      };
    }
    
    if (input.includes('free call') || input.includes('consultation') || input.includes('book')) {
      return {
        text: "Book your Free Strategy Call today! We'll:\n\n1️⃣ Analyze your current situation\n2️⃣ Identify your biggest obstacles\n3️⃣ Create a personalized roadmap to completion\n4️⃣ Show you exactly how to finish while maintaining career and family life\n\nNo pressure, no sales pitch - just clarity!\n\n📅 Book at: https://calendly.com/researchmentorclinic1/doctorate-call"
      };
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('guarantee')) {
      return {
        text: "We offer 100% Money-Back Guarantee! Work with us for 10 days - if you don't see major progress on your DBA, get every penny back PLUS keep all materials.\n\nInvestment details are discussed during your free strategy call where we'll create a personalized roadmap.\n\n📅 Book your free call to discuss pricing!",
        buttons: ['📞 Book Strategy Call', '❓ I have another question']
      };
    }
    
    if (input.includes('stuck') || input.includes('struggling') || input.includes('help')) {
      return {
        text: "You're not alone! Stop fighting alone. Our proven 4-step system has helped 100+ professionals finish their DBA while keeping their career and family happy.\n\nYou'll learn fast, get guided support every 2 weeks, join others in monthly group calls, and save 20+ hours per week on technical details.\n\n📅 Book a free strategy call to break through!",
        buttons: ['📞 Book Strategy Call', '🎁 Get Free Resources']
      };
    }
    
    if (input.includes('contact') || input.includes('reach')) {
      return {
        text: "Connect with DBA Coach:\n\n📞 WhatsApp: +918827272142\n\n📅 Book Free Call:\nhttps://calendly.com/researchmentorclinic1/doctorate-call\n\n📱 Instagram:\nhttps://www.instagram.com/dbacoach6/?igsh=MWZhcmVrOGtlMHZ3bw%3D%3D#\n\n📘 Facebook:\nhttps://www.facebook.com/people/DBA-Coach/61584373431880/\n\n🎥 YouTube:\nhttps://www.youtube.com/@Research_Mentor_Clinic\n\nWe're here to help you succeed!"
      };
    }
    
    // Smart conversational responses for general queries
    if (input.includes('research') || input.includes('thesis') || input.includes('dissertation')) {
      return {
        text: "Great question about research! 📚 Many DBA students struggle with research methodology and thesis writing. That's exactly what we specialize in!\n\nOur team has 250+ years of combined experience and has helped publish 120+ papers. We break down complex research into simple, actionable steps.\n\nBy the way, did you know our students complete their DBA 50% faster than average? Would you like to know how our proven system works?",
        buttons: ['🌟 Learn Our System', '📞 Book Strategy Call', '❓ Ask More']
      };
    }
    
    if (input.includes('time') || input.includes('busy') || input.includes('work') || input.includes('job')) {
      return {
        text: "I totally understand! ⏰ Balancing a DBA with career and family is tough. That's why we created our system specifically for busy professionals like you.\n\nOur students save 20+ hours per week because we handle the technical stuff - formatting, citations, data analysis. You focus on the important parts while we take care of the rest.\n\nPlus, with bi-weekly mentoring sessions, you stay on track without feeling overwhelmed. Interested in learning more about how we help busy executives finish their DBA?",
        buttons: ['🌟 Learn Our System', '📞 Book Free Call', '❓ Ask More']
      };
    }
    
    if (input.includes('data') || input.includes('analysis') || input.includes('statistics') || input.includes('spss')) {
      return {
        text: "Data analysis can be intimidating! 📊 But here's the good news - you don't have to figure it out alone.\n\nOur expert team handles all the technical aspects of data analysis, including SPSS, statistical tests, and interpretation. We've helped students with 120+ published papers!\n\nWe provide step-by-step guidance and do the heavy lifting so you can focus on your research insights. Want to see how our support system works?",
        buttons: ['🌟 Learn Our System', '📞 Book Strategy Call', '❓ Ask More']
      };
    }
    
    if (input.includes('mentor') || input.includes('guide') || input.includes('support') || input.includes('coach')) {
      return {
        text: "Excellent! Having the right mentor makes ALL the difference. 👨🏫\n\nWith DBA Coach, you get:\n✅ Personal mentor (bi-weekly 1-on-1 sessions)\n✅ Monthly group calls with fellow DBA students\n✅ 24/7 support when you need it\n✅ 250+ years of combined team experience\n\nWe've helped 100+ professionals complete their DBA with a 98% success rate. Plus, we only accept 12 students per month to ensure personalized attention.\n\nWant to discuss how we can support YOUR DBA journey?",
        buttons: ['📞 Book Free Call', '🎁 Get Free Resources', '❓ Ask More']
      };
    }
    
    if (input.includes('literature') || input.includes('review') || input.includes('reading') || input.includes('papers')) {
      return {
        text: "Literature review can feel overwhelming! 📖 Reading hundreds of papers while working full-time? Nearly impossible!\n\nThat's where our speed reading method and note-taking system come in. Our students learn to efficiently review literature without spending endless hours.\n\nWe also provide templates and frameworks that make organizing your literature review much easier. This is part of our proven 4-step system that helps you complete your DBA 50% faster!\n\nCurious about our complete system?",
        buttons: ['🌟 Learn Our System', '🎁 Get Free Resources', '❓ Ask More']
      };
    }
    
    if (input.includes('writing') || input.includes('chapter') || input.includes('draft')) {
      return {
        text: "Writing your DBA thesis is a marathon, not a sprint! ✍️\n\nMany students get stuck in endless revisions. Our writing framework helps you structure each chapter clearly and efficiently. We handle formatting, citations, and technical details - saving you 20+ hours per week!\n\nPlus, your personal mentor reviews your drafts every 2 weeks, so you stay on track. No more wondering if you're going in the right direction!\n\nWith our support, students complete their DBA 50% faster. Want to learn how?",
        buttons: ['🌟 Learn Our System', '📞 Book Strategy Call', '❓ Ask More']
      };
    }
    
    if (input.includes('defense') || input.includes('viva') || input.includes('presentation')) {
      return {
        text: "Defense preparation is crucial! 🎯 But don't worry - we've got you covered!\n\nOur defense preparation guide (part of our free resources) includes:\n✅ Common questions and how to answer\n✅ Presentation structure\n✅ Confidence-building techniques\n✅ Mock defense practice\n\nWe've helped 100+ students successfully defend their DBA with a 98% success rate. Our mentors know exactly what examiners look for!\n\nWant our complete defense preparation guide?",
        buttons: ['🎁 Get Free Resources', '📞 Book Strategy Call', '❓ Ask More']
      };
    }
    
    if (input.includes('money') || input.includes('investment') || input.includes('afford') || input.includes('expensive')) {
      return {
        text: "I understand budget is important! 💰\n\nHere's what makes us different - we offer a 100% Money-Back Guarantee! Work with us for 10 days. If you don't see major progress, get every penny back PLUS keep all materials.\n\nThink about it: How much is your time worth? Our students save 20+ hours per week and complete their DBA 50% faster. That's months of your life back!\n\nPlus, we discuss flexible investment options during your free strategy call. No pressure, just clarity on what works for YOUR situation.\n\nWant to explore your options?",
        buttons: ['📞 Book Free Call', '🎁 Get Free Resources', '❓ Ask More']
      };
    }
    
    if (input.includes('thank') || input.includes('thanks') || input.includes('appreciate')) {
      return {
        text: "You're very welcome! 😊 I'm here to help you succeed!\n\nRemember, you don't have to do this alone. Our team has helped 100+ professionals just like you complete their DBA while maintaining their career and family life.\n\nIs there anything else you'd like to know about our DBA coaching services?",
        buttons: ['📞 Book Strategy Call', '🎁 Get Free Resources', '❓ Ask More']
      };
    }
    
    // Default smart response with service mention
    return {
      text: "That's an interesting question! 🤔 While I want to give you the most accurate information, I'd recommend speaking with our DBA success team directly.\n\nThey can provide personalized guidance based on your specific situation. With 250+ years of combined experience and a 98% success rate, they've seen it all!\n\nWould you like to book a free strategy call? Or I can send you our free resources to get started!",
      buttons: ['📞 Book Free Call', '🎁 Get Free Resources', '❓ Ask More']
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    try {
      // Send to backend
      const response = await fetch('/api/chat/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          message: currentInput
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: data.reply,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      console.error('Chat error:', error);
      // Fallback to local response
      const response = getBotResponse(currentInput);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        buttons: response.buttons
      };
      setMessages(prev => [...prev, botResponse]);
      
      // Show form if inappropriate message
      if (response.showForm) {
        setTimeout(() => setShowLeadForm(true), 1000);
      }
    }
    
    setIsTyping(false);
  };

  const handleEndChat = () => {
    setChatEnded(true);
    setShowRating(true);
  };

  const handleRatingSubmit = (selectedRating: number) => {
    setRating(selectedRating);
    setShowRating(false);
    
    const thankYouMessage: Message = {
      id: Date.now().toString(),
      text: `Thank you for your ${selectedRating === 3 ? 'positive' : selectedRating === 2 ? 'neutral' : 'honest'} feedback! 🙏\n\nYour chat session has ended. If you wish to continue the chat, feel free to start a new conversation.\n\nHave a great day! 😊`,
      isBot: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, thankYouMessage]);
  };

  const handleLeadFormSubmit = async () => {
    if (!leadForm.firstName || !leadForm.email || !leadForm.phone) {
      alert('Please fill in all required fields');
      return;
    }

    // Hide lead form
    setShowLeadForm(false);

    // Add success message
    const successMessage: Message = {
      id: Date.now().toString(),
      text: `Thank you ${leadForm.firstName}! 🎉\n\nI've received your information and our DBA success team will contact you within 24 hours to discuss your personalized roadmap.\n\nIn the meantime, feel free to ask me any questions about our DBA coaching services!`,
      isBot: true,
      timestamp: new Date(),
      buttons: ['📞 Book Immediate Call', '🎁 Get Free Resources', '❓ Ask Questions']
    };

    setMessages(prev => [...prev, successMessage]);

    // Submit to HubSpot using utility function
    try {
      const success = await submitToHubSpot({
        firstname: leadForm.firstName,
        email: leadForm.email,
        phone: leadForm.phone,
        message: 'Contact request from DBA Dissertation Coach Chatbot - Dr Alex'
      }, {
        pageUri: window.location.href,
        pageName: 'DBA Dissertation Coach Chatbot'
      });
      
      if (success) {
        console.log('Lead submitted successfully to HubSpot');
      } else {
        console.log('HubSpot submission failed, but continuing with success flow');
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
    }
    
    // Reset form
    setLeadForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: ''
    });
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${isOpen ? 'hidden' : 'block'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <img src="/Sara.png" alt="DBA chatbot assistant - Dr Alex" className="w-12 h-12 rounded-full object-cover" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">1</span>
        </div>
      </motion.button>

      {/* Minimize Button - Outside Chat Window */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed bottom-[630px] right-6 z-60 w-12 h-12 bg-pink-400 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
          title="Minimize Chat"
        >
          <span className="text-white text-1xl font-bold leading-none">∨</span>
        </button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center relative">
                  <img 
                    src="/Sara.png" 
                    alt="DBA chatbot assistant - Dr Alex" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dr Alex👋</h3>
                  <p className="text-xs opacity-90">Online • DBA Success Assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!chatEnded && (
                  <button
                    onClick={handleEndChat}
                    className="text-white/80 hover:text-white transition-colors text-xs px-2 py-1 bg-white/20 rounded"
                  >
                    End Chat
                  </button>
                )}
                <button
                  onClick={() => setShowConversationHistory(!showConversationHistory)}
                  className="text-white/80 hover:text-white transition-colors mr-2"
                  title="Conversation History"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Conversation History Panel */}
            {showConversationHistory && (
              <div className="absolute inset-0 bg-white z-20">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Conversation History</h3>
                  <button
                    onClick={() => setShowConversationHistory(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-4 h-[520px] overflow-y-auto">
                  {conversationHistory.length === 0 ? (
                    <div className="text-center text-gray-500 mt-8">
                      <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No previous conversations</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-700 mb-3">Recent Conversations</h4>
                      {conversationHistory.map((conv) => (
                        <div
                          key={conv.sessionId}
                          onClick={() => {
                            setSessionId(conv.sessionId);
                            localStorage.setItem('chatSessionId', conv.sessionId);
                            loadExistingConversation(conv.sessionId);
                            setShowConversationHistory(false);
                          }}
                          className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <span className="text-blue-600 text-xs font-bold">
                                    {conv.userName.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                                <span className="font-medium text-sm text-gray-800">
                                  {conv.userName}
                                </span>
                              </div>
                              <p className="text-xs text-gray-600 line-clamp-2">
                                {conv.lastMessage.length > 60 
                                  ? conv.lastMessage.substring(0, 60) + '...' 
                                  : conv.lastMessage
                                }
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-gray-500">
                                {new Date(conv.lastActivity).toLocaleDateString()}
                              </p>
                              <p className="text-xs text-gray-400">
                                {conv.messageCount} messages
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-6 pt-4 border-t">
                    <button
                      onClick={() => {
                        const newSessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                        localStorage.setItem('chatSessionId', newSessionId);
                        setSessionId(newSessionId);
                        setMessages([]);
                        setShowConversationHistory(false);
                        setShowWelcomeButtons(true);
                      }}
                      className="w-full p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      + Start New Conversation
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Messages */}
            <div className={`flex-1 p-4 overflow-y-auto bg-gray-50 h-[440px]`}>
              {messages.map((message) => (
                <div key={message.id} className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}>
                  <div className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                    message.isBot 
                      ? 'bg-white text-gray-800 shadow-sm' 
                      : 'bg-blue-600 text-white'
                  }`}>
                    <div className="flex items-start gap-2">
                      {message.isBot && (
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">A</span>
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-line" dangerouslySetInnerHTML={{ 
                          __html: message.text.replace(
                            /(https?:\/\/[^\s]+)/g, 
                            '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline hover:text-blue-700 break-all">$1</a>'
                          )
                        }} />
                      </div>
                      {!message.isBot && (
                        <User className="w-4 h-4 mt-1 text-white/80 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              ))}
              
              {/* Welcome Buttons - Below Messages */}
              {showWelcomeButtons && !showConversationHistory && (
                <div className="mb-4">
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setShowWelcomeButtons(false);
                        // Scroll to services section
                        const servicesSection = document.getElementById('services-section');
                        if (servicesSection) {
                          servicesSection.scrollIntoView({ behavior: 'smooth' });
                        }
                        // Show lead form after delay
                        setTimeout(() => setShowLeadForm(true), 2000);
                      }}
                      className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      👨‍🎓 1:1 Doctorate Coaching
                    </button>
                    <button
                      onClick={() => {
                        setShowWelcomeButtons(false);
                        // Scroll to services section
                        const servicesSection = document.getElementById('services-section');
                        if (servicesSection) {
                          servicesSection.scrollIntoView({ behavior: 'smooth' });
                        }
                        // Show lead form after delay
                        setTimeout(() => setShowLeadForm(true), 2000);
                      }}
                      className="w-full p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      🚀 Doctorate Achiever Program
                    </button>
                    <button
                      onClick={() => {
                        setShowWelcomeButtons(false);
                        // Scroll to services section
                        const servicesSection = document.getElementById('services-section');
                        if (servicesSection) {
                          servicesSection.scrollIntoView({ behavior: 'smooth' });
                        }
                        // Show lead form after delay
                        setTimeout(() => setShowLeadForm(true), 2000);
                      }}
                      className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      ⚡ Time Saver Services
                    </button>
                  </div>
                </div>
              )}
              
              {isTyping && (
                <div className="text-left mb-4">
                  <div className="inline-block bg-white p-3 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Rating Section */}
              {showRating && (
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <p className="text-sm text-gray-700 mb-3">Share your rating & feedback</p>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => handleRatingSubmit(1)}
                      className="flex flex-col items-center gap-1 p-2 hover:bg-gray-100 rounded transition-colors"
                    >
                      <span className="text-2xl">😞</span>
                      <span className="text-xs text-gray-600">Sad</span>
                    </button>
                    <button
                      onClick={() => handleRatingSubmit(2)}
                      className="flex flex-col items-center gap-1 p-2 hover:bg-gray-100 rounded transition-colors"
                    >
                      <span className="text-2xl">😐</span>
                      <span className="text-xs text-gray-600">Neutral</span>
                    </button>
                    <button
                      onClick={() => handleRatingSubmit(3)}
                      className="flex flex-col items-center gap-1 p-2 hover:bg-gray-100 rounded transition-colors"
                    >
                      <span className="text-2xl">😄</span>
                      <span className="text-xs text-gray-600">Happy</span>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Please rate this support session as Sad/Neutral/Happy
                  </p>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Lead Form Modal */}
            {showLeadForm && (
              <div className="absolute inset-0 bg-white z-10">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                      <img 
                        src="/Sara.png" 
                        alt="DBA chatbot assistant - Dr Alex" 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Alex</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowLeadForm(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-4 space-y-4">
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Get Your Free DBA Dissertation Strategy Call</h4>
                    <p className="text-sm text-gray-600">Fill in your details below and our team will contact you within 24 hours</p>
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={leadForm.firstName}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, firstName: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  
                  <input
                    type="email"
                    placeholder="Enter your email address (required)"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone with country code (e.g. +91) (required)"
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setShowLeadForm(false)}
                      className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleLeadFormSubmit}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Input */}
            {!showLeadForm && !showWelcomeButtons && !chatEnded && (
              <div className="p-4 border-t bg-white">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message and hit 'Enter'"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isTyping || !inputValue.trim()}
                    className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Chat Ended Message */}
            {chatEnded && !showRating && (
              <div className="p-4 border-t bg-gray-50 text-center">
                <p className="text-sm text-gray-600">
                  Your chat session has ended. If you wish to continue the chat, 
                  <button 
                    onClick={() => {
                      setChatEnded(false);
                      setShowWelcomeButtons(true);
                      setMessages([]);
                    }}
                    className="text-blue-600 hover:text-blue-700 underline ml-1"
                  >
                    click here
                  </button>.
                </p>
                <button className="text-blue-600 hover:text-blue-700 underline text-sm mt-2">
                  Email this transcript
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;