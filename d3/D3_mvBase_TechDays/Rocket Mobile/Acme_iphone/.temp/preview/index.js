window.$$mobileclientruntime = {"variables":[{"scope":"application","name":"Search_Cust_NAMES","storage":"local","persistent":true,"properties":{"value":"$Search_Cust_NAMES"}},{"scope":"application","name":"Search_Cust_ADDRS","storage":"local","persistent":true,"properties":{"value":"$Search_Cust_ADDRS"}},{"scope":"application","name":"Search_Cust_PHONE","storage":"local","persistent":true,"properties":{"value":"$Search_Cust_PHONE"}},{"scope":"application","name":"Search_Cust_STERR","storage":"local","persistent":true,"properties":{"value":"$Search_Cust_STERR"}},{"scope":"user","name":"HOST","storage":"local","persistent":true,"properties":{"value":"http://den-vm-dg02:8181"}},{"scope":"application","name":"CUST_SELECTION","storage":"local","persistent":true,"properties":{"value":"$CUST_SELECTION"}},{"scope":"application","name":"CUST_ACCT","storage":"local","persistent":true,"properties":{"value":"$CUST_ACCT"}},{"name":"INVOICE_NO","properties":{"value":"$INVOICE_NO"}},{"name":"INVOICE_SELECTION","properties":{"value":"$INVOICE_SELECTION"}},{"name":"CUST_NAME","properties":{"value":"$CUST_NAME"}},{"name":"CUST_ADDR","properties":{"value":"$CUST_ADDR"}},{"name":"CUST_CITY","properties":{"value":"$CUST_CITY"}},{"name":"CUST_STATE","properties":{"value":"$CUST_STATE"}},{"name":"CUST_ZIP","properties":{"value":"$CUST_ZIP"}},{"name":"CUST_PHONE","properties":{"value":"$CUST_PHONE"}},{"name":"INVOICE_ITEM_SELECTION","properties":{"value":"$INVOICE_ITEM_SELECTION"}},{"name":"App","properties":{"value":{"ApplicationIconXHDPI":"","ApplicationIconDefault":"","ApplicationVersion":"1.0.37","RequireUserCredentials":"false","ApplicationIconHDPI":"Resources/Oxygen/64/apps/office-project.png","ErrorPage":"","ApiKey":"","ApplicationIcon120":"Resources/Oxygen/128/apps/office-project.png","DeviceStatusbarStyle":"light","EnableMessaging":"","ApplicationAuthorWeb":"","EventLoggerMaxNumber":"","CertificateFile":"","ApplicationAuthor":"Dorien Gardner","GenerateApplicationBundle":"true","ApplicationIcon76":"","ApplicationIconXXXHDPI":"","ApplicationBundle":"com.rs.acme_iphone","Events":"[{\"name\":\"AppPause\",\"description\":\"The app is suspended / paused\"},{\"name\":\"AppResume\",\"description\":\"The app is resumed\"},{\"name\":\"AppStart\",\"description\":\"The app is started\"},{\"name\":\"PageEnter\",\"description\":\"A page is being displayed\"},{\"name\":\"ServiceRequest\",\"description\":\"Service invocation sent\"},{\"name\":\"ServiceResponse\",\"description\":\"Service response received\"}]","BlockedPage":"","DeviceStatusbarVisible":"false","AutoIncrementVersion":"true","ApplicationAuthorEmail":"dgardner@rocketsoftware.com","ApplicationVendor":"com.rs","GeolocationTimeout":"","CameraPermission":"","DeviceStatusbarColor":"","CredentialsPage":"","GeolocationMaxAge":"","ApplicationIcon152":"","ApplicationIdentity":"8fdee071-026a-400a-84ed-aa27e43ab6a1","ApplicationIconXXHDPI":"","Roles":"","PrivateKeyFile":"","SenderId":"","ApplicationDescription":"Acme Mobile Project for D3 Tech Days","EventLoggerMaxPeriod":"","RMABVersion":"7.4.0.3528","GeolocationPermission":"","LicenseManagers":"{\"activeLicenseManager\":\"Development\",\"licenseManagers\":{\"Production\":\"https://rsmob.rocketsoftware.com/trial\",\"Development\":\"https://rsmob.rocketsoftware.com/internal\"}}","ApplicationTitle":"Acme Rocket","ApplicationIcon60":"Resources/Oxygen/48/apps/office-project.png","PhonegapConfigExText":"","GeolocationHighAccuracy":"","GeolocationWatchPosition":"false"}}},{"name":"WS_CustList","properties":{"value":{"response":{ "getCustList": { "CUSTLIST": { "foundCustomers": [ { "foundPhone": "", "foundZip": "", "foundName": "", "foundCity": "", "foundAcctNo": "All search fields are empty", "foundState": "", "foundAddress": "" } ] } } }}}},{"name":"WS_DeleteCust","properties":{"value":{"response":{ "delete_cust_item": { "STATUS": "" } }}}},{"name":"WS_Invoice","properties":{"value":{"response":{ "getInvoice": { "INVOICE_ITEM": { "billtoCity": "PHOENIX", "shiptoAddress": "2720 W SAHUARO DR", "invoiceDate": "08-06-2014", "billtoZip": "85009", "orderDate": "06-26-2014", "invoiceNet": "11695.24", "terms": "Net 30", "shiptoName": "ALCON LABORATORIES, INC.", "line": [ { "lineGross": "7999.96", "lineDiscount": "3%", "lineExtNet": "240.00", "lineUnitPrice": "1999.99", "lineProductNo": "1", "lineQty": "4", "lineDescription": "ACME GUIDED MISSLE LAUNCHER" }, { "lineGross": "2319.96", "lineDiscount": "3%", "lineExtNet": "69.60", "lineUnitPrice": "579.99", "lineProductNo": "2", "lineQty": "4", "lineDescription": "ACME REPLACEMENT GUIDED MISSLES (3 PACK)" }, { "lineGross": "499.95", "lineDiscount": "3%", "lineExtNet": "15.00", "lineUnitPrice": "99.99", "lineProductNo": "3", "lineQty": "5", "lineDescription": "ACME ROCKET POWERED ROLLER SKATES (PAIR)" }, { "lineGross": "1199.97", "lineDiscount": "", "lineExtNet": "0.00", "lineUnitPrice": "399.99", "lineProductNo": "5", "lineQty": "3", "lineDescription": "ACME DO-IT-YOURSELF TORNADO KIT" } ], "billtoState": "AZ", "billtoCompanyName": "ROADRUNNER ABATEMENT SERVICES", "invoiceNo": "1044033", "salesRepName": "Robin Barclay", "TERR_NO": "01", "billtoAddress": "2520 GRAND AVE", "invoiceGross": "12019.84", "billtoContactName": "WILE E COYOTE", "invoiceDiscount": "324.60", "shiptoCity": "IRVINE", "comment": "NMI", "shiptoState": "CA", "custAccount": "1003940", "shiptoZip": "92623", "salesRepPhone": "" } } }}}},{"name":"WS_Invoices","properties":{"value":{"response":{ "getInvoiceList": { "INVOICE_LIST": { "invoice": [ { "totalGross": "12019.84", "salesRep": "Robin Barclay", "terms": "Net 30", "totalDiscount": "324.60", "invoiceNo": "1044033", "invoiceDate": "08-06-2014", "orderDate": "06-26-2014", "totalNet": "11695.24", "InvoiceComments": "NMI" }, { "totalGross": "3019.82", "salesRep": "Robin Barclay", "terms": "Net 30", "totalDiscount": "33.20", "invoiceNo": "1031319", "invoiceDate": "09-18-2013", "orderDate": "09-10-2013", "totalNet": "2986.62", "InvoiceComments": "" }, { "totalGross": "599.97", "salesRep": "Robin Barclay", "terms": "Net 30", "totalDiscount": "6.00", "invoiceNo": "1026934", "invoiceDate": "07-26-2013", "orderDate": "07-26-2013", "totalNet": "593.97", "InvoiceComments": "" }, { "totalGross": "1619.88", "salesRep": "Robin Barclay", "terms": "Net 30", "totalDiscount": "54.00", "invoiceNo": "1011231", "invoiceDate": "04-08-2012", "orderDate": "04-03-2012", "totalNet": "1565.88", "InvoiceComments": "SEE P.O." } ], "custName": "ROADRUNNER ABATEMENT SERVICES" } } }}}},{"name":"WS_WriteRec","properties":{"value":{"response":{ "writecustitem": { "STATUS": "Item Added" } }}}}],"pages":[{"id":"index","children":[{"children":[{"handlers":{"tap":[{"actions":[{"targetId":"txt_CustAddr","type":"WIDGET_PROPERTY","properties":{"value":""}},{"targetId":"txt_CustName","type":"WIDGET_PROPERTY","properties":{"value":""}},{"targetId":"txt_CustPhone","type":"WIDGET_PROPERTY","properties":{"value":""}},{"targetId":"txt_CustTerr","type":"WIDGET_PROPERTY","properties":{"value":""}}]}]},"id":"Button1","type":"Button","properties":{"icon":"Resources/32x32/nope.png","show":"icon","backgroundColor":"#ffffff"}},{"handlers":{"tap":[{"actions":[{"targetId":"Search_Cust_ADDRS","type":"SET_VARIABLE_VALUE","properties":{"value":"${txt_CustAddr.value}"}},{"targetId":"Search_Cust_NAMES","type":"SET_VARIABLE_VALUE","properties":{"value":"${txt_CustName.value}"}},{"targetId":"Search_Cust_PHONE","type":"SET_VARIABLE_VALUE","properties":{"value":"${txt_CustPhone.value}"}},{"targetId":"Search_Cust_STERR","type":"SET_VARIABLE_VALUE","properties":{"value":"${txt_CustTerr.value}"}},{"targetId":"WS_CustList","type":"SERVICE_CALL"},{"targetId":"pg_CustList","type":"OPEN_PAGE","properties":{"transition":"slide"}}]}]},"id":"Button2","type":"Button","properties":{"icon":"Resources/32x32/arrow-right.png","show":"icon","backgroundColor":"#ffffff"}}],"id":"ToolBar1","type":"ToolBar","properties":{"backgroundColor":"#ffffff"}},{"id":"Image1","type":"Image","properties":{"marginLeft":30,"source":"Resources/acme.png"}},{"children":[{"id":"txt_CustName","type":"TextField","properties":{"formLabel":"Name:"}},{"id":"txt_CustAddr","type":"TextField","properties":{"formLabel":"Addr:"}},{"id":"txt_CustPhone","type":"TextField","properties":{"formLabel":"Phone: (Last 4 Digits)","labelPosition":"top"}},{"id":"txt_CustTerr","type":"TextField","properties":{"formLabel":"Terr#:"}}],"id":"frm_CustSearch","type":"FormComposite"}],"handlers":{"load":[{"actions":[{"targetId":"NULL","type":"CUSTOM_SCRIPT","properties":{"path":"Scripts/initialize.js"}}]}]},"properties":{"title":"Customer Search","backgroundColor":"#00008b","actionbutton":{"handlers":{"tap":[{"actions":[{"targetId":"pg_Config","type":"OPEN_PAGE","properties":{"transition":"fade"}}]}]},"id":"actionbutton1","type":"NavigationButton","properties":{"icon":"Resources/32x32/settings-3.png","iconPosition":"right","label":"Settings","textColor":"#000000"}}}}],"services":[{"id":"Geolocation","type":"Geolocation","properties":{"watchPosition":false,"enableHighAccuracy":false,"maximumAge":0,"timeout":0}}],"device":{"statusBar":{"visible":"false","style":"light"}}};