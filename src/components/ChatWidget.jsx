import React, { useState, useEffect, useRef } from 'react';

export default function ChatWidget({ backendUrl }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Welcome to DBA Coach - World\'s #1 Coaching for DBA Success! 🎓 How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [sessionId] = useState(() => 'sess_' + Math.random().toString(36).slice(2));
  const endRef = useRef(null);
  useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

  async function sendMessage(text) {
    if (!text) return;
    setMessages(prev => [...prev, { from: 'user', text }]);
    setInput('');
    try {
      console.log('Sending message to:', `${backendUrl}/api/chat`);
      const resp = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, message: text })
      });
      
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }
      
      const data = await resp.json();
      console.log('Response:', data);
      setMessages(prev => [...prev, { from: 'bot', text: data.reply }]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [...prev, { from: 'bot', text: 'Sorry, I couldn\'t connect to the server. Please make sure the backend is running on port 5000.' }]);
    }
  }

  async function captureLead({ name, email, phone, msg }) {
    try {
      await fetch(`${backendUrl}/api/lead`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, email, phone, message: msg })
      });
      setMessages(prev => [...prev, { from: 'bot', text: 'Thanks — we saved your details. Our admissions team will contact you.' }]);
    } catch (err) {
      setMessages(prev => [...prev, { from: 'bot', text: 'Could not save lead. Try again later.' }]);
    }
  }

  return (
    <div style={{ position:'fixed', right:20, bottom:20, zIndex:9999 }}>
      {!open && (
        <button onClick={() => setOpen(true)} style={{ width:56, height:56, borderRadius:28, background:'#2563eb', color:'#fff', border:'none', boxShadow:'0 4px 12px rgba(0,0,0,.2)' }}>
          💬
        </button>
      )}
      {open && (
        <div style={{ width:320, height:420, background:'#fff', borderRadius:12, boxShadow:'0 8px 30px rgba(0,0,0,.15)', display:'flex', flexDirection:'column', overflow:'hidden' }}>
          <div style={{ background:'#2563eb', color:'#fff', padding:12, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <div style={{ fontWeight:600 }}>DBA Coach Assistant</div>
            <div style={{ cursor:'pointer' }} onClick={() => setOpen(false)}>✕</div>
          </div>
          <div style={{ padding:12, flex:1, overflow:'auto' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ marginBottom:10, textAlign: m.from === 'user' ? 'right' : 'left' }}>
                <div style={{ display:'inline-block', padding:'8px 12px', borderRadius:10, background: m.from === 'user' ? '#f3f4f6' : '#eef2ff' }}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} style={{ padding:12, borderTop:'1px solid #eee' }}>
            <div style={{ display:'flex', gap:8 }}>
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." style={{ flex:1, padding:8, borderRadius:6, border:'1px solid #ddd' }} />
              <button type="submit" style={{ background:'#2563eb', color:'#fff', border:'none', padding:'8px 12px', borderRadius:6 }}>Send</button>
            </div>
            <div style={{ marginTop:8, fontSize:12, color:'#6b7280' }}>
              Need a call? <button type="button" onClick={() => {
                const name = prompt('Your name?');
                const email = prompt('Email?');
                const phone = prompt('Phone (optional)?');
                const msg = prompt('Message (optional)?');
                if (email) captureLead({ name, email, phone, msg });
              }} style={{ color:'#2563eb', background:'none', border:'none', padding:0, cursor:'pointer' }}>Book a call</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
