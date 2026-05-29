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
      .zcwf_lblLeft .zcwf_col_fld input[type=text], input[type=password], .zcwf_lblLeft .zcwf_col_fld textarea{ width: 60%; border: 1px solid #c0c6cc !important; resize: vertical; border-radius: 2px; float: left; }
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
          <form id='webform1324452000000527085' action='https://crm.zoho.in/crm/WebToContactForm' name='WebToContacts1324452000000527085' method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory1324452000000527085()' accept-charset='UTF-8'>
            <input type='text' style='display:none;' name='xnQsjsdp' value='601c2e140991532936943684a9d3f32069ae59506eb2bd3ffcfed4703fa101e3'></input>
            <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
            <input type='text' style='display:none;' name='xmIwtLD' value='efd20f9c833ad6ac6e1d3209b0e1b2a5b5731cc74d213d186b244e48c2014e2fc41a361f566378986033e1b6a5c15616'></input>
            <input type='text' style='display:none;' name='actionType' value='Q29udGFjdHM='></input>
            <input type='text' style='display:none;' name='returnURL' value='null'></input>

            <div class='zcwf_title' style='max-width: 600px;color: black; font-family:Arial;'>Lead Magnet Download &mdash; Website</div>

            <div class='zcwf_row'>
              <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>
                <label for='Email'>Email</label>
              </div>
              <div class='zcwf_col_fld'>
                <input type='text' ftype='email' autocomplete='false' id='Email' aria-required='false' aria-label='Email' name='Email' aria-valuemax='100' maxlength='100'></input>
                <div class='zcwf_col_help'></div>
              </div>
            </div>

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
                  <option value='DBA Support'>DBA Support</option>
                  <option value='AI Dev'>AI Dev</option>
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

            <input type='hidden' style='display:none;' name='aG9uZXlwb3Q' value=''/>

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

      // Inject validation + helper scripts
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

        function validateEmail1324452000000527085(){
          var form = document.forms['WebToContacts1324452000000527085'];
          var emailFld = form.querySelectorAll('[ftype=email]');
          for (var i = 0; i < emailFld.length; i++) {
            var emailVal = emailFld[i].value;
            if ((emailVal.replace(/^\\s+|\\s+$/g, '')).length != 0) {
              var atpos = emailVal.indexOf('@');
              var dotpos = emailVal.lastIndexOf('.');
              if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                alert('Please enter a valid email address.');
                emailFld[i].focus();
                return false;
              }
            }
          }
          return true;
        }

        function checkMandatory1324452000000527085(){
          var mndFileds = new Array('First Name', 'Last Name', 'Phone', 'CONTACTCF2');
          var fldLangVal = new Array('First Name', 'Last Name', 'WhatsApp Number', 'Business Line');
          for (var i = 0; i < mndFileds.length; i++) {
            var fieldObj = document.forms['WebToContacts1324452000000527085'][mndFileds[i]];
            if (fieldObj) {
              if (((fieldObj.value).replace(/^\\s+|\\s+$/g, '')).length == 0) {
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
              try {
                if (fieldObj.name == 'Last Name') { name = fieldObj.value; }
              } catch(e) {}
            }
          }
          if (!validateEmail1324452000000527085()) { return false; }
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
            for (var i = 0; i < allTooltip.length; i++) {
              allTooltip[i].style.display = 'none';
            }
            tooltip.style.display = 'block';
          } else {
            tooltip.style.display = 'none';
          }
        }
      `;
      containerRef.current.appendChild(validationScript);

      // Inject analytics tracking script (required by Zoho — do not remove)
      const analyticsScript = document.createElement('script');
      analyticsScript.id = 'wf_anal';
      analyticsScript.src = 'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=1bffe670b96a6b08127bd44e6aa939b56e0c51c78a115397a8d7e663fba4374e7615d7a20383bd5ac747a036fe57f75fgid224bdd34e8ec759dd2c6b71eb76b2bc63e4070c8b3d168fb370848474e104400gidbf22928ffe644716af86dfc978d2c4113fc3a9657e3c22c4c261b2eac55d1ad8gid3f4dd94ab483d1d857318a561577da8609f630bd7a309597d478d20e3c3351a4&tw=6015585a6ad2aa0fa43acd3513190ce68d4d43e4167b5854b57207df96463cd0';
      containerRef.current.appendChild(analyticsScript);
    }

    // Cleanup
    return () => {
      const styleEl = document.getElementById('zoho-crm-styles');
      if (styleEl) styleEl.remove();
    };
  }, []);

  return <div ref={containerRef} style={{ maxWidth: '600px', margin: '0 auto' }} />;
};

export default ZohoCRMForm;
