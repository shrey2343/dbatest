import React, { useEffect, useRef } from 'react';

const ZohoCRMForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Guard against double injection in React StrictMode
    if (document.getElementById('zoho-crm-styles')) {
      return;
    }

    // Inject Zoho CSS into document head
    const styleElement = document.createElement('style');
    styleElement.id = 'zoho-crm-styles';
    styleElement.textContent = `
      html,body{ margin: 0px; }
      .formsubmit.zcwf_button{ color: white !important; background: transparent linear-gradient(0deg, #0279FF 0%, #00A3F3 100%); }
      #crmWebToEntityForm.zcwf_lblLeft{ width: 100%; padding: 25px; margin: 0 auto; box-sizing: border-box; }
      #crmWebToEntityForm.zcwf_lblLeft *{ box-sizing: border-box; }
      #crmWebToEntityForm{ text-align: left; }
      #crmWebToEntityForm *{ direction: ltr; }
      .zcwf_lblLeft .zcwf_title{ word-wrap: break-word; padding: 0px 6px 10px; font-weight: bold }
      .zcwf_lblLeft.cpT_primaryBtn:hover{ background: linear-gradient(#02acff 0,#006be4 100%)no-repeat padding-box !important; box-shadow: 0 -2px 0 0 #0159b9 inset !important; border: 0 !important; color: #fff !important; outline: 0 !important; }
      .zcwf_lblLeft .zcwf_col_fld input[ type = text], input[ type = password], .zcwf_lblLeft .zcwf_col_fld textarea{ width: 60%; border: 1px solid #c0c6cc !important; resize: vertical; border-radius: 2px; float: left; }
      .zcwf_lblLeft .zcwf_col_lab{ width: 30%; word-break: break-word; padding: 0px 6px 0px; margin-right: 10px; margin-top: 5px; float: left; min-height: 1px; }
      .zcwf_lblLeft .zcwf_col_fld{ float: left; width: 68%; padding: 0px 6px 0px; position: relative; margin-top: 5px; }
      .zcwf_lblLeft .zcwf_privacy{ padding: 6px; }
      .zcwf_lblLeft .wfrm_fld_dpNn{ display: none; }
      .dIB{ display: inline-block; }
      .zcwf_lblLeft .zcwf_col_fld_slt{ width: 60%; border: 1px solid #ccc; background: #fff; border-radius: 4px; font-size: 12px; float: left; resize: vertical; padding: 2px 5px; }
      .zcwf_lblLeft .zcwf_row:after, .zcwf_lblLeft .zcwf_col_fld:after{ content: ''; display: table; clear: both; }
      .zcwf_lblLeft .zcwf_col_help{ float: left; margin-left: 7px; font-size: 12px; max-width: 35%; word-break: break-word; }
      .zcwf_lblLeft .zcwf_help_icon{ cursor: pointer; width: 16px; height: 16px; display: inline-block; background: #fff; border: 1px solid #c0c6cc; color: #c1c1c1; text-align: center; font-size: 11px; line-height: 16px; font-weight: bold; border-radius: 50%; }
      .zcwf_lblLeft .zcwf_row{ margin: 15px 0px; }
      .zcwf_lblLeft .formsubmit{ margin-right: 5px; cursor: pointer; color: #313949; font-size: 12px; }
      .zcwf_lblLeft .zcwf_privacy_txt{ width: 90%; color: rgb(0, 0, 0); font-size: 12px; font-family: Arial; display: inline-block; vertical-align: top; color: #313949; padding-top: 2px; margin-left: 6px; }
      .zcwf_lblLeft .zcwf_button{ font-size: 12px; color: #313949; border: 1px solid #c0c6cc; padding: 3px 9px; border-radius: 4px; cursor: pointer; max-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .zcwf_lblLeft .zcwf_tooltip_over{ position: relative; }
      .zcwf_lblLeft .zcwf_tooltip_ctn{ position: absolute; background: #dedede; padding: 3px 6px; top: 3px; border-radius: 4px; word-break: break-word; min-width: 100px; max-width: 150px; color: #313949; z-index: 100; }
      .zcwf_lblLeft .zcwf_ckbox{ float: left; }
      .zcwf_lblLeft .zcwf_file{ width: 55%; box-sizing: border-box; float: left; }
      .cBoth:after{ content: ''; display: block; clear: both; }
      @media all and (max-width: 600px){ .zcwf_lblLeft .zcwf_col_lab, .zcwf_lblLeft .zcwf_col_fld{ width: auto; float: none !important; } .zcwf_lblLeft .zcwf_col_help{ width: 40%; } }
    `;
    document.head.appendChild(styleElement);

    // Inject form HTML
    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white;color: black;max-width: 600px;'>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>
          <form id='webform1324452000000527085' action='https://crm.zoho.in/crm/WebToContactForm' name=WebToContacts1324452000000527085 method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory1324452000000527085()' accept-charset='UTF-8'>
            <input type='text' style='display:none;' name='xnQsjsdp' value='8bbd35515d6a83c052b1e6576c5c88c66e03a2029e7ad697e512874bfe87ca4f'></input>
            <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
            <input type='text' style='display:none;' name='xmIwtLD' value='8c45ff248fbf8d61c290ea098f607578e4ce3c83d44ee4b8d32f30b2782d8dd8ee8b3d33e2322c7915dad56c4b5b511d'></input>
            <input type='text' style='display:none;' name='actionType' value='Q29udGFjdHM='></input>
            <input type='text' style='display:none;' name='returnURL' value='null'></input>
            
            <div class='zcwf_title' style='max-width: 600px;color: black; font-family:Arial;'>Lead Magnet Download &mdash; Website</div>
            
            <div class='zcwf_row'>
              <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
                <label for='First_Name'>First Name <span style='color:red;'>*</span></label>
              </div>
              <div class='zcwf_col_fld'>
                <input type='text' id='First_Name' aria-required='true' aria-label='First Name' name='First Name' aria-valuemax='40' maxlength='40'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            
            <div class='zcwf_row'>
              <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
                <label for='Last_Name'>Last Name <span style='color:red;'>*</span></label>
              </div>
              <div class='zcwf_col_fld'>
                <input type='text' id='Last_Name' aria-required='true' aria-label='Last Name' name='Last Name' aria-valuemax='80' maxlength='80'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            
            <div class='zcwf_row'>
              <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
                <label for='Phone'>WhatsApp Number <span style='color:red;'>*</span></label>
              </div>
              <div class='zcwf_col_fld'>
                <input type='text' id='Phone' aria-required='true' aria-label='Phone' name='Phone' aria-valuemax='50' maxlength='50'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            
            <div class='zcwf_row'>
              <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
                <label for='CONTACTCF2'>Business Line <span style='color:red;'>*</span></label>
              </div>
              <div class='zcwf_col_fld'>
                <select class='zcwf_col_fld_slt' role='combobox' aria-expanded='false' aria-haspopup='listbox' id='CONTACTCF2' onChange='addAriaSelected1324452000000527085()' aria-required='true' aria-label='CONTACTCF2' name='CONTACTCF2'>
                  <option value='-None-'>-None-</option>
                  <option value='DBA&#x20;Support'>DBA Support</option>
                  <option value='AI&#x20;Dev'>AI Dev</option>
                  <option value='Biotech'>Biotech</option>
                </select>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            
            <div class='zcwf_row wfrm_fld_dpNn'>
              <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
                <label for='CONTACTCF1'>Lead Source Keyword</label>
              </div>
              <div class='zcwf_col_fld'>
                <input type='text' id='CONTACTCF1' aria-required='false' aria-label='CONTACTCF1' name='CONTACTCF1' aria-valuemax='255' maxlength='255' value='Website'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>
            
            <input type='text' type='hidden' style='display: none;' name='aG9uZXlwb3Q' value=''/>
            
            <div class='zcwf_row'>
              <div class='zcwf_col_lab'></div>
              <div class='zcwf_col_fld'>
                <input type='submit' id='formsubmit' role='button' class='formsubmit zcwf_button' value='Submit' aria-label='Submit' title='Submit'>
                <input type='reset' class='zcwf_button' role='button' name='reset' value='Reset' aria-label='Reset' title='Reset'>
              </div>
            </div>
          </form>
        </div>
      `;

      // Inject validation script
      const validationScript = document.createElement('script');
      validationScript.textContent = `
        function addAriaSelected1324452000000527085(){
          var optionElem = event.target;
          var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
          if (previousSelectedOption) {
            previousSelectedOption.removeAttribute('aria-selected');
          }
          optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
        }
        
        function checkMandatory1324452000000527085(){
          var mndFileds = new Array('First Name', 'Last Name', 'Phone', 'CONTACTCF2');
          var fldLangVal = new Array('First\\x20Name', 'Last\\x20Name', 'WhatsApp\\x20Number', 'Business\\x20Line');
          for (i = 0; i < mndFileds.length; i++) {
            var fieldObj = document.forms['WebToContacts1324452000000527085'][mndFileds[i]];
            if (fieldObj) {
              if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'')).length == 0) {
                if (fieldObj.type == 'file') {
                  alert('Please select a file to upload.');
                  fieldObj.focus();
                  return false;
                }
                alert(fldLangVal[i] + ' cannot be empty.');
                fieldObj.focus();
                return false;
              } else if (fieldObj.nodeName == 'SELECT') {
                if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                  alert(fldLangVal[i] + ' cannot be none.');
                  fieldObj.focus();
                  return false;
                }
              } else if (fieldObj.type == 'checkbox') {
                if (fieldObj.checked == false) {
                  alert('Please accept ' + fldLangVal[i]);
                  fieldObj.focus();
                  return false;
                }
              }
              try{
                if (fieldObj.name == 'Last Name') {
                  name = fieldObj.value;
                }
              } catch (e){}
            }
          }
          var urlparams = new URLSearchParams(window.location.search);
          if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
            var webform = document.getElementById('webform1324452000000527085');
            var service = urlparams.get('service');
            var smarturlfield = document.createElement('input');
            smarturlfield.setAttribute('type', 'hidden');
            smarturlfield.setAttribute('value', service);
            smarturlfield.setAttribute('name', 'service');
            webform.appendChild(smarturlfield);
          }
          document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
        }
        
        function tooltipShow1324452000000527085(el){
          var tooltip = el.nextElementSibling;
          var tooltipDisplay = tooltip.style.display;
          if (tooltipDisplay == 'none') {
            var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
            for (i = 0; i < allTooltip.length; i++) {
              allTooltip[i].style.display = 'none';
            }
            tooltip.style.display = 'block';
          } else {
            tooltip.style.display = 'none';
          }
        }
      `;
      containerRef.current.appendChild(validationScript);

      // Inject analytics tracking script (required by Zoho)
      const analyticsScript = document.createElement('script');
      analyticsScript.id = 'wf_anal';
      analyticsScript.src = 'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=914302884a118c2797e8ca40f4486b4a05d2ee4f1979ff822c991f8e40b82f4de829e1ffd03a734cdf8cfa67cac6b614gid4ae3cc0de943c4638513dbaffa57edbeef7320383b0971d5c4947858ca7a1b1egid84f7797dcdb3c662e8d49575f869f19797b30cf41de3f56147f4e2df0ccf3d48gid1a729b340e37cac60ace784f5a8a246ac97acadcdee9e493228fd4560ad771ab&tw=b5b2ceab28c8607a081b74f3746cc6b3586e7e62ed7f2891c21659cad27f13d5';
      containerRef.current.appendChild(analyticsScript);
    }

    // Cleanup function
    return () => {
      const styleEl = document.getElementById('zoho-crm-styles');
      if (styleEl) {
        styleEl.remove();
      }
    };
  }, []);

  return <div ref={containerRef} style={{ maxWidth: '600px', margin: '0 auto' }} />;
};

export default ZohoCRMForm;
