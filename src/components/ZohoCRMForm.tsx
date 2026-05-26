import { useEffect } from 'react';

export default function ZohoCRMForm() {
  useEffect(() => {
    if (!document.getElementById('zoho-crm-styles')) {
      const style = document.createElement('style');
      style.id = 'zoho-crm-styles';
      style.textContent = `
        #crmWebToEntityForm.zcwf_lblLeft{width:100%;padding:25px;margin:0 auto;box-sizing:border-box;}
        #crmWebToEntityForm.zcwf_lblLeft *{box-sizing:border-box;}
        #crmWebToEntityForm{text-align:left;background-color:white;color:black;}
        .zcwf_lblLeft .zcwf_col_fld input[type=text],.zcwf_lblLeft .zcwf_col_fld textarea{width:60%;border:1px solid #c0c6cc!important;resize:vertical;border-radius:2px;float:left;}
        .zcwf_lblLeft .zcwf_col_lab{width:30%;word-break:break-word;padding:0px 6px 0px;margin-right:10px;margin-top:5px;float:left;min-height:1px;}
        .zcwf_lblLeft .zcwf_col_fld{float:left;width:68%;padding:0px 6px 0px;position:relative;margin-top:5px;}
        .zcwf_lblLeft .wfrm_fld_dpNn{display:none;}
        .zcwf_lblLeft .zcwf_col_fld_slt{width:60%;border:1px solid #ccc;background:#fff;border-radius:4px;font-size:12px;float:left;resize:vertical;padding:2px 5px;}
        .zcwf_lblLeft .zcwf_row:after,.zcwf_lblLeft .zcwf_col_fld:after{content:'';display:table;clear:both;}
        .zcwf_lblLeft .zcwf_row{margin:15px 0px;}
        .zcwf_lblLeft .formsubmit{margin-right:5px;cursor:pointer;color:white!important;font-size:12px;background:linear-gradient(0deg,#0279FF 0%,#00A3F3 100%);}
        .zcwf_lblLeft .zcwf_button{font-size:12px;color:#313949;border:1px solid #c0c6cc;padding:3px 9px;border-radius:4px;cursor:pointer;max-width:120px;}
        @media all and (max-width:600px){.zcwf_lblLeft .zcwf_col_lab,.zcwf_lblLeft .zcwf_col_fld{width:auto;float:none!important;}}
      `;
      document.head.appendChild(style);
    }

    return () => {
      document.getElementById('zoho-crm-styles')?.remove();
    };
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm" style={{ backgroundColor: 'white', color: 'black' }}>
        <form
          id="webform1324452000000527085"
          action="https://crm.zoho.in/crm/WebToContactForm"
          name="WebToContacts1324452000000527085"
          method="POST"
          onSubmit={() => { document.charset = 'UTF-8'; }}
          acceptCharset="UTF-8"
        >
          <input type="text" style={{ display: 'none' }} name="xnQsjsdp" defaultValue="8bbd35515d6a83c052b1e6576c5c88c66e03a2029e7ad697e512874bfe87ca4f" readOnly />
          <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
          <input type="text" style={{ display: 'none' }} name="xmIwtLD" defaultValue="8c45ff248fbf8d61c290ea098f607578e4ce3c83d44ee4b8d32f30b2782d8dd8ee8b3d33e2322c7915dad56c4b5b511d" readOnly />
          <input type="text" style={{ display: 'none' }} name="actionType" defaultValue="Q29udGFjdHM=" readOnly />
          <input type="text" style={{ display: 'none' }} name="returnURL" defaultValue="null" readOnly />

          <div className="zcwf_title" style={{ color: 'black', fontFamily: 'Arial' }}>Lead Magnet Download — Website</div>

          <div className="zcwf_row">
            <div className="zcwf_col_lab" style={{ fontSize: '12px', fontFamily: 'Arial' }}><label htmlFor="First_Name">First Name <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" id="First_Name" name="First Name" maxLength={40} aria-required="true" /></div>
          </div>

          <div className="zcwf_row">
            <div className="zcwf_col_lab" style={{ fontSize: '12px', fontFamily: 'Arial' }}><label htmlFor="Last_Name">Last Name <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" id="Last_Name" name="Last Name" maxLength={80} aria-required="true" /></div>
          </div>

          <div className="zcwf_row">
            <div className="zcwf_col_lab" style={{ fontSize: '12px', fontFamily: 'Arial' }}><label htmlFor="Phone">WhatsApp Number <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld"><input type="text" id="Phone" name="Phone" maxLength={50} aria-required="true" /></div>
          </div>

          <div className="zcwf_row">
            <div className="zcwf_col_lab" style={{ fontSize: '12px', fontFamily: 'Arial' }}><label htmlFor="CONTACTCF2">Business Line <span style={{ color: 'red' }}>*</span></label></div>
            <div className="zcwf_col_fld">
              <select className="zcwf_col_fld_slt" id="CONTACTCF2" name="CONTACTCF2" aria-required="true" defaultValue="-None-">
                <option value="-None-">-None-</option>
                <option value="DBA Support">DBA Support</option>
                <option value="AI Dev">AI Dev</option>
                <option value="Biotech">Biotech</option>
              </select>
            </div>
          </div>

          <div className="zcwf_row wfrm_fld_dpNn">
            <div className="zcwf_col_lab" style={{ fontSize: '12px', fontFamily: 'Arial' }}><label htmlFor="CONTACTCF1">Lead Source Keyword</label></div>
            <div className="zcwf_col_fld"><input type="text" id="CONTACTCF1" name="CONTACTCF1" maxLength={255} defaultValue="Website" /></div>
          </div>

          <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" defaultValue="" />

          <div className="zcwf_row">
            <div className="zcwf_col_lab"></div>
            <div className="zcwf_col_fld">
              <input type="submit" id="formsubmit" className="formsubmit zcwf_button" value="Submit" title="Submit" />
              <input type="reset" className="zcwf_button" name="reset" value="Reset" title="Reset" />
            </div>
          </div>
        </form>

        {/* Validation script — required by Zoho, do not remove */}
        <script dangerouslySetInnerHTML={{ __html: `
          function checkMandatory1324452000000527085(){
            var mndFileds=['First Name','Last Name','Phone','CONTACTCF2'];
            var fldLangVal=['First Name','Last Name','WhatsApp Number','Business Line'];
            for(var i=0;i<mndFileds.length;i++){
              var fieldObj=document.forms['WebToContacts1324452000000527085'][mndFileds[i]];
              if(fieldObj){
                if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'')).length==0){
                  alert(fldLangVal[i]+' cannot be empty.');
                  fieldObj.focus();
                  return false;
                } else if(fieldObj.nodeName=='SELECT'){
                  if(fieldObj.options[fieldObj.selectedIndex].value=='-None-'){
                    alert(fldLangVal[i]+' cannot be none.');
                    fieldObj.focus();
                    return false;
                  }
                }
              }
            }
            document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled',true);
            return true;
          }
          document.getElementById('webform1324452000000527085').onsubmit = function(){
            document.charset='UTF-8';
            return checkMandatory1324452000000527085();
          };
        `}} />

        {/* Analytics tracking — REQUIRED by Zoho, do not remove */}
        <script
          id="wf_anal"
          src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=914302884a118c2797e8ca40f4486b4a05d2ee4f1979ff822c991f8e40b82f4de829e1ffd03a734cdf8cfa67cac6b614gid4ae3cc0de943c4638513dbaffa57edbeef7320383b0971d5c4947858ca7a1b1egid84f7797dcdb3c662e8d49575f869f19797b30cf41de3f56147f4e2df0ccf3d48gid1a729b340e37cac60ace784f5a8a246ac97acadcdee9e493228fd4560ad771ab&tw=b5b2ceab28c8607a081b74f3746cc6b3586e7e62ed7f2891c21659cad27f13d5"
        />
      </div>
    </div>
  );
}
