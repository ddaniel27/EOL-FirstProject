exports.constructorHTML =(orden, total, address, productos, addressCom) => {

  let htmlProductos = ``;

  productos.forEach(p => {

      htmlProductos = htmlProductos + `
      <tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255); border-radius:0px">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_18" id="x_Layout_18" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:100%">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" align="center" valign="top" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;">
<a href="" name="x_Layout_18"></a>
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-container" bgcolor="#ffffff" style="border-collapse: collapse;border-spacing: 0px;max-width:100%; min-width:100%; table-layout:fixed; background-color:rgb(255,255,255); border-radius:0px; border-collapse:separate; padding:20px">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" class="x_rnb-container-padding" align="left" style="border-collapse: collapse;border-collapse: collapse;">
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-columns-container" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<th class="x_rnb-force-col x_img-block-center" valign="top" width="180" style="text-align:left; font-weight:normal; padding-right:20px">
<table border="0" valign="top" cellspacing="0" cellpadding="0" align="left" class="x_rnb-col-2-noborder-onright" width="180" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td width="100%" class="x_img-block-center" valign="top" align="center" style="border-collapse: collapse;border-collapse: collapse;line-height:auto">
<div style="margin: 0px; padding: 0px;border-top:0px none #000; border-right:0px None #000; border-bottom:0px None #000; border-left:0px None #000; display:inline-block">
<div style="margin: 0px; padding: 0px;"><img alt="" border="0" hspace="0" vspace="0" width="" class="x_rnb-col-2-img-side-xl" style="vertical-align:top; float:left; width:px; max-width:100px!important" src="https://img.mailinblue.com/3654192/images/rnb/original/60791123ce94135553743f4c.png"></div>
<div style="margin: 0px; padding: 0px;clear:both"></div>
</div>
</td>
</tr>
</tbody>
</table>
</th>
<th class="x_rnb-force-col" valign="top" style="text-align:left; font-weight:normal">
<table border="0" valign="top" cellspacing="0" cellpadding="0" width="350" align="left" class="x_rnb-last-col-2" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;font-size:24px; font-family:Arial,Helvetica,sans-serif; color:#3c4858; text-align:left">
<span style="color:#3c4858"><strong><span style="font-size:18px">${p.ProductName}</span></strong></span></td>
</tr>
<tr style="border-collapse: collapse;">
<td height="10" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:10px">
&nbsp;</td>
</tr>
<tr style="border-collapse: collapse;">
<td class="x_rnb-mbl-float-none" style="border-collapse: collapse;border-collapse: collapse;font-size:14px; font-family:Arial,Helvetica,sans-serif; color:#3c4858; float:right; width:350px">
<div style="margin: 0px; padding: 0px;">${p.Quantity> 1 ? p.Quantity+' Unidades. ': p.Quantity+' Unidad. '}   ${p.Message}</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="10" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:10px">
&nbsp;</td>
</tr>
<tr style="border-collapse: collapse;">
<td valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table cellpadding="0" border="0" align="left" cellspacing="0" class="x_rnb-btn-col-content" style="border-collapse: collapse;border-spacing: 0px;border-collapse:separate">
<tbody>
<tr style="border-collapse: collapse;">
<td width="auto" valign="middle" bgcolor="#9617ba" align="center" height="32" style="border-collapse: collapse;border-collapse: collapse;font-size:14px; font-family:Arial,Helvetica,sans-serif; text-align:center; color:#ffffff; font-weight:normal; padding-left:14px; padding-right:14px; background-color:#0092ff; border-radius:4px; border-top:0px None #000; border-right:0px None #000; border-bottom:0px None #000; border-left:0px None #000; border-collapse:separate">
<span style="color:#ffffff; font-weight:normal"><a target="_blank" style="text-decoration:none; color:#ffffff; font-weight:normal">${p.Value}</a>
</span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
      `
  });

return `
<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=Windows-1252">
<style type="text/css" style="display:none;"> P {margin-top:0;margin-bottom:0;} </style>
</head>
<body dir="ltr">
<div style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 12pt; color: rgb(0, 0, 0);">
<br>
</div>
<div>
<div id="divRplyFwdMsg" dir="ltr" style="margin: 0px; padding: 0px;">
<div style="margin: 0px; padding: 0px;">&nbsp;</div>
</div>
<div style="margin: 0px; padding: 0px;">
<table cellpadding="0" border="0" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;display:none">
<tbody>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;">Tu orden de compra ha sido creada con éxito.</td>
</tr>
</tbody>
</table>
<table border="0" align="center" width="100%" cellpadding="0" cellspacing="0" class="x_main-template" bgcolor="#f9fafc" style="border-collapse: collapse;border-spacing: 0px;background-image:url(https://img.mailinblue.com/3654192/images/rnb/original/6079150ff173dd31b505dd53.png); background-position:center top; background-size:auto; background-repeat:no-repeat; background-color:rgb(255,255,255)">
<tbody>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table border="0" cellpadding="0" cellspacing="0" width="590" class="x_templateContainer" style="max-width: 590px !important; width: auto !important;border-collapse: collapse;border-spacing: 0px;max-width:590px!important; width:590px">
<tbody>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_0" id="x_Layout_0" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:590px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" valign="top" align="center" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_0"></a>
<table width="100%" cellpadding="0" border="0" height="38" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" height="38" style="border-collapse: collapse;border-collapse: collapse;">
<img width="20" height="38" alt="" style="display:block; max-height:38px; max-width:20px" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255); border-radius:0px">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_1" id="x_Layout_1" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:590px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" align="center" valign="top" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_1"></a>
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-container" bgcolor="#ffffff" style="border-collapse: collapse;border-spacing: 0px;background-color:rgb(255,255,255); border-radius:0px; padding-left:20px; padding-right:20px; border-collapse:separate">
<tbody>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
<tr style="border-collapse: collapse;">
<td valign="top" class="x_rnb-container-padding" align="left" style="border-collapse: collapse;border-collapse: collapse;">
<table width="100%" cellpadding="0" border="0" align="center" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" align="center" style="border-collapse: collapse;border-collapse: collapse;">
<table cellpadding="0" border="0" align="center" cellspacing="0" class="x_logo-img-center" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="middle" align="center" style="border-collapse: collapse;border-collapse: collapse;line-height:1px">
<div cellspacing="0" cellpadding="0" border="0" style="margin: 0px; padding: 0px;border-top:0px None #000; border-right:0px None #000; border-bottom:0px None #000; border-left:0px None #000; display:inline-block">
<div style="margin: 0px; padding: 0px;"><a target="_blank" href="https://protect-de.mimecast.com/s/IHgDC160ljupx4ZrHGZBjn?domain=dgfebjc.r.bh.d.sendibt3.com" style="text-decoration:none"><img width="" vspace="0" hspace="0" border="0" alt="tp" class="x_rnb-logo-img" style="float:left; max-width:px" src="https://img.mailinblue.com/3654192/images/rnb/original/6079128da3a4a815fb4435e0.png"></a></div>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255); border-radius:0px">
<table width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_2" id="x_Layout_2" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<a href="" name="x_Layout_2"></a>
<table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_rnb-container" bgcolor="#ffffff" style="border-collapse: collapse;border-spacing: 0px;height:0px; background-color:rgb(255,255,255); border-radius:0px; border-collapse:separate; padding-left:20px; padding-right:20px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-container-padding" style="border-collapse: collapse;border-collapse: collapse;font-size:px; font-family:; color:">
<table border="0" cellpadding="0" cellspacing="0" class="x_rnb-columns-container" align="center" style="border-collapse: collapse;border-spacing: 0px;margin:auto">
<tbody>
<tr style="border-collapse: collapse;">
<th class="x_rnb-force-col" align="center" style="text-align:center; font-weight:normal">
<table border="0" cellspacing="0" cellpadding="0" align="center" class="x_rnb-col-1" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td height="10" style="border-collapse: collapse;border-collapse: collapse;"></td>
</tr>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;font-family:Arial,Helvetica,sans-serif; color:#3c4858; text-align:center">
<span style="color:#3c4858"><strong><span style="font-size:24px">Confirmación de compra</span></strong></span>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="10" style="border-collapse: collapse;border-collapse: collapse;"></td>
</tr>
</tbody>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_5210" id="x_Layout_5210" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:590px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" valign="top" align="center" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_5210"></a>
<table width="100%" cellpadding="0" border="0" height="38" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" height="38" style="border-collapse: collapse;border-collapse: collapse;">
<img width="20" height="38" alt="" style="display:block; max-height:38px; max-width:20px" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255); border-radius:0px">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_8" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:100%">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" align="center" valign="top" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;">
<a href="" name="x_Layout_8"></a>
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-container" bgcolor="#ffffff" style="border-collapse: collapse;border-spacing: 0px;background-color:rgb(255,255,255); padding-left:20px; padding-right:20px; border-collapse:separate; border-radius:0px; border-bottom:0px none rgb(200,200,200)">
<tbody>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
<tr style="border-collapse: collapse;">
<td valign="top" class="x_rnb-container-padding" align="left" style="border-collapse: collapse;border-collapse: collapse;">
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-columns-container" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<th class="x_rnb-force-col" valign="top" style="text-align:left; font-weight:normal; padding-right:0px">
<table border="0" valign="top" cellspacing="0" cellpadding="0" width="100%" align="left" class="x_rnb-col-1" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;font-size:14px; font-family:Arial,Helvetica,sans-serif,sans-serif; color:#3c4858">
<div style="margin: 0px; padding: 0px;text-align:right"><span style="font-size:18px"><strong>Orden creada # <h3 style="color:#781295">${orden}</h3></strong></span></div>
</td>
</tr>
</tbody>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255); border-radius:0px">
<table width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_11" id="x_Layout_11" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<a href="" name="x_Layout_11"></a>
<table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_rnb-container" bgcolor="#ffffff" style="border-collapse: collapse;border-spacing: 0px;height:0px; background-color:rgb(255,255,255); border-radius:0px; border-collapse:separate; padding-left:20px; padding-right:20px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-container-padding" style="border-collapse: collapse;border-collapse: collapse;font-size:px; font-family:; color:">
<table border="0" cellpadding="0" cellspacing="0" class="x_rnb-columns-container" align="center" style="border-collapse: collapse;border-spacing: 0px;margin:auto">
<tbody>
<tr style="border-collapse: collapse;">
<th class="x_rnb-force-col" align="center" style="text-align:center; font-weight:normal">
<table border="0" cellspacing="0" cellpadding="0" align="center" class="x_rnb-col-1" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td height="10" style="border-collapse: collapse;border-collapse: collapse;"></td>
</tr>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;font-family:Arial,Helvetica,sans-serif; color:#3c4858; text-align:center">
<span style="color:#3c4858"><strong><span style="font-size:24px">Resumen de compra</span></strong></span>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="10" style="border-collapse: collapse;border-collapse: collapse;"></td>
</tr>
</tbody>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255); border-radius:0px">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_12" id="x_Layout_12" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:100%">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" align="center" valign="top" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;">
<a href="" name="x_Layout_12"></a>
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-container" bgcolor="#ffffff" style="border-collapse: collapse;border-spacing: 0px;max-width:100%; min-width:100%; table-layout:fixed; background-color:rgb(255,255,255); border-radius:0px; border-collapse:separate; padding:20px">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" class="x_rnb-container-padding" align="left" style="border-collapse: collapse;border-collapse: collapse;">
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-columns-container" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<th class="x_rnb-force-col x_img-block-center" valign="top" width="180" style="text-align:left; font-weight:normal; padding-right:20px">
<table border="0" valign="top" cellspacing="0" cellpadding="0" align="left" class="x_rnb-col-2-noborder-onright" width="180" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td width="100%" class="x_img-block-center" valign="top" align="center" style="border-collapse: collapse;border-collapse: collapse;line-height:auto">
<div style="margin: 0px; padding: 0px;border-top:0px none #000; border-right:0px None #000; border-bottom:0px None #000; border-left:0px None #000; display:inline-block">
<div style="margin: 0px; padding: 0px;"><img alt="" border="0" hspace="0" vspace="0" width="" class="x_rnb-col-2-img-side-xl" style="vertical-align:top; float:left; width:px; max-width:100px!important" src="https://img.mailinblue.com/3654192/images/rnb/original/60790f7d4fdc981f4a4929b2.png"></div>
<div style="margin: 0px; padding: 0px;clear:both"></div>
</div>
</td>
</tr>
</tbody>
</table>
</th>
<th class="x_rnb-force-col" valign="top" style="text-align:left; font-weight:normal">
<table border="0" valign="top" cellspacing="0" cellpadding="0" width="350" align="left" class="x_rnb-last-col-2" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;font-size:24px; font-family:Arial,Helvetica,sans-serif; color:#3c4858; text-align:left">
<span style="color:#3c4858"><strong><span style="font-size:18px">Total</span></strong></span></td>
</tr>
<tr style="border-collapse: collapse;">
<td height="10" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:10px">
&nbsp;</td>
</tr>
<tr style="border-collapse: collapse;">
<td class="x_rnb-mbl-float-none" style="border-collapse: collapse;border-collapse: collapse;font-size:14px; font-family:Arial,Helvetica,sans-serif; color:#3c4858; float:right; width:350px">
<div style="margin: 0px; padding: 0px;text-align:left"><strong><span style="font-size:22px; color: #781295">${total}</span></strong></div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="10" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:10px">
&nbsp;</td>
</tr>
<tr style="border-collapse: collapse;">
<td valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table cellpadding="0" border="0" align="left" cellspacing="0" class="x_rnb-btn-col-content" style="border-collapse: collapse;border-spacing: 0px;border-collapse:separate">
<tbody>
<tr style="border-collapse: collapse;">
</span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255); border-radius:0px">
<table width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_13" id="x_Layout_13" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<a href="" name="x_Layout_13"></a>
<table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_rnb-container" bgcolor="#ffffff" style="border-collapse: collapse;border-spacing: 0px;height:0px; background-color:rgb(255,255,255); border-radius:0px; border-collapse:separate; padding-left:20px; padding-right:20px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-container-padding" style="border-collapse: collapse;border-collapse: collapse;font-size:px; font-family:; color:">
<table border="0" cellpadding="0" cellspacing="0" class="x_rnb-columns-container" align="center" style="border-collapse: collapse;border-spacing: 0px;margin:auto">
<tbody>
<tr style="border-collapse: collapse;">
<th class="x_rnb-force-col" align="center" style="text-align:center; font-weight:normal">
<table border="0" cellspacing="0" cellpadding="0" align="center" class="x_rnb-col-1" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td height="10" style="border-collapse: collapse;border-collapse: collapse;"></td>
</tr>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;font-family:Arial,Helvetica,sans-serif; color:#3c4858; text-align:center">
<span style="color:#3c4858"><strong><span style="font-size:24px">Dirección de envío</span></strong></span>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="10" style="border-collapse: collapse;border-collapse: collapse;"></td>
</tr>
</tbody>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255); border-radius:0px">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_14" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:100%">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" align="center" valign="top" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;">
<a href="" name="x_Layout_14"></a>
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-container" bgcolor="#ffffff" style="border-collapse: collapse;border-spacing: 0px;background-color:rgb(255,255,255); padding-left:20px; padding-right:20px; border-collapse:separate; border-radius:0px; border-bottom:0px none rgb(200,200,200)">
<tbody>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
<tr style="border-collapse: collapse;">
<td valign="top" class="x_rnb-container-padding" align="left" style="border-collapse: collapse;border-collapse: collapse;">
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-columns-container" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<th class="x_rnb-force-col" valign="top" style="text-align:left; font-weight:normal; padding-right:0px">
<table border="0" valign="top" cellspacing="0" cellpadding="0" width="100%" align="left" class="x_rnb-col-1" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;font-size:14px; font-family:Arial,Helvetica,sans-serif,sans-serif; color:#3c4858">
<p style="font-size:1rem; text-align: center">${addressCom}</p>
<div style="margin: 0px; padding: 0px;text-align:center"><strong><span style="font-size:20px">${address}</span></strong></div>
</td>
</tr>
</tbody>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_8162" id="x_Layout_8162" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:590px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" valign="top" align="center" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_8162"></a>
<table width="100%" cellpadding="0" border="0" height="38" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" height="38" style="border-collapse: collapse;border-collapse: collapse;">
<img width="20" height="38" alt="" style="display:block; max-height:38px; max-width:20px" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255); border-radius:0px">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_15" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:100%">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" align="center" valign="top" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;">
<a href="" name="x_Layout_15"></a>
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-container" bgcolor="#ffffff" style="border-collapse: collapse;border-spacing: 0px;background-color:rgb(255,255,255); padding-left:20px; padding-right:20px; border-collapse:separate; border-radius:0px; border-bottom:0px none rgb(200,200,200)">
<tbody>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
<tr style="border-collapse: collapse;">
<td valign="top" class="x_rnb-container-padding" align="left" style="border-collapse: collapse;border-collapse: collapse;">
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-columns-container" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<th class="x_rnb-force-col" valign="top" style="text-align:left; font-weight:normal; padding-right:0px">
<table border="0" valign="top" cellspacing="0" cellpadding="0" width="100%" align="left" class="x_rnb-col-1" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;font-size:14px; font-family:Arial,Helvetica,sans-serif,sans-serif; color:#3c4858">
<div style="margin: 0px; padding: 0px;text-align:center"><span style="font-size:18px">Hazle seguimiento a tu orden</span></div>
</td>
</tr>
</tbody>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255); border-radius:0px">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_16" id="x_Layout_16" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:590px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" align="center" valign="top" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_16"></a>
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_mso-button-block x_rnb-container" style="border-collapse: collapse;border-spacing: 0px;background-color:rgb(255,255,255); border-radius:0px; padding-left:20px; padding-right:20px; border-collapse:separate">
<tbody>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
<tr style="border-collapse: collapse;">
<td valign="top" class="x_rnb-container-padding" align="left" style="border-collapse: collapse;border-collapse: collapse;">
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-columns-container" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<th class="x_rnb-force-col" valign="top">
<table border="0" valign="top" cellspacing="0" cellpadding="0" width="550" align="center" class="x_rnb-col-1" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table cellpadding="0" border="0" align="center" cellspacing="0" class="x_rnb-btn-col-content" style="border-collapse: collapse;border-spacing: 0px;margin:auto; border-collapse:separate">
<tbody>
<tr style="border-collapse: collapse;">
<td width="auto" valign="middle" bgcolor="#0092ff" align="center" height="40" style="border-collapse: collapse;border-collapse: collapse;font-size:18px; font-family:Arial,Helvetica,sans-serif; color:#ffffff; font-weight:normal; padding-left:20px; padding-right:20px; vertical-align:middle; background-color:#0092ff; border-radius:4px; border-top:0px None #000; border-right:0px None #000; border-bottom:0px None #000; border-left:0px None #000">
<span style="color:#ffffff; font-weight:normal"><a target="_blank" href="https://protect-de.mimecast.com/s/5AzeC36znlumok4jfDGeHa?domain=dgfebjc.r.bh.d.sendibt3.com" style="text-decoration:none; color:#ffffff; font-weight:normal">VER
MIS MOVIMIENTOS</a> </span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_9035" id="x_Layout_9035" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:590px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" valign="top" align="center" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_9035"></a>
<table width="100%" cellpadding="0" border="0" height="38" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" height="38" style="border-collapse: collapse;border-collapse: collapse;">
<img width="20" height="38" alt="" style="display:block; max-height:38px; max-width:20px" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255); border-radius:0px">
<table width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_17" id="x_Layout_17" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<a href="" name="x_Layout_17"></a>
<table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_rnb-container" bgcolor="#ffffff" style="border-collapse: collapse;border-spacing: 0px;height:0px; background-color:rgb(255,255,255); border-radius:0px; border-collapse:separate; padding-left:20px; padding-right:20px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-container-padding" style="border-collapse: collapse;border-collapse: collapse;font-size:px; font-family:; color:">
<table border="0" cellpadding="0" cellspacing="0" class="x_rnb-columns-container" align="center" style="border-collapse: collapse;border-spacing: 0px;margin:auto">
<tbody>
<tr style="border-collapse: collapse;">
<th class="x_rnb-force-col" align="center" style="text-align:center; font-weight:normal">
<table border="0" cellspacing="0" cellpadding="0" align="center" class="x_rnb-col-1" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td height="10" style="border-collapse: collapse;border-collapse: collapse;"></td>
</tr>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;font-family:Arial,Helvetica,sans-serif; color:#3c4858; text-align:center">
<span style="color:#3c4858"><strong><span style="font-size:24px">Detalle de productos</span></strong></span>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="10" style="border-collapse: collapse;border-collapse: collapse;"></td>
</tr>
</tbody>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
${htmlProductos}
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_" id="x_Layout_" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:590px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" valign="top" align="center" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_"></a>
<table width="100%" cellpadding="0" border="0" height="30" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" height="30" style="border-collapse: collapse;border-collapse: collapse;">
<img width="20" height="30" alt="" style="display:block; max-height:30px; max-width:20px" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(249,250,252)">
<table class="x_rnb-del-min-width x_rnb-tmpl-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_5" id="x_Layout_5" style="min-width: 0px !important;width: 100% !important;border-collapse: collapse;border-spacing: 0px;min-width:590px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" align="center" valign="top" bgcolor="#f9fafc" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px; background-color:rgb(249,250,252)">
<a href="" name="x_Layout_5"></a>
<table width="590" class="x_rnb-container" cellpadding="0" border="0" align="center" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
<tr style="border-collapse: collapse;">
<td valign="top" class="x_rnb-container-padding" align="left" style="border-collapse: collapse;border-collapse: collapse;font-size:14px; font-family:Arial,Helvetica,sans-serif; color:#888888">
<table width="100%" border="0" cellpadding="0" cellspacing="0" class="x_rnb-columns-container" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<th class="x_rnb-force-col" valign="top" style="padding-right:20px; padding-left:20px; font-weight:normal">
<table border="0" valign="top" cellspacing="0" cellpadding="0" width="264" align="left" class="x_rnb-col-2 x_rnb-social-text-left" style="border-collapse: collapse;border-spacing: 0px;border-bottom:0">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table cellpadding="0" border="0" align="left" cellspacing="0" class="x_rnb-btn-col-content" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="middle" align="left" class="x_rnb-text-center" style="border-collapse: collapse;border-collapse: collapse;font-size:14px; font-family:Arial,Helvetica,sans-serif; color:#888888; line-height:16px">
<div style="margin: 0px; padding: 0px;">
<div style="margin: 0px; padding: 0px;">TP SHOP</div>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th>
<th class="x_rnb-force-col x_rnb-social-width" valign="top" style="padding-right: 15px !important;padding-right:15px">
<table border="0" valign="top" cellspacing="0" cellpadding="0" width="246" align="right" class="x_rnb-last-col-2" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table cellpadding="0" border="0" cellspacing="0" class="x_rnb-social-align" align="right" style="float: right !important;border-collapse: collapse;border-spacing: 0px;float:right">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="middle" class="x_rnb-text-center" width="" align="right" style="border-collapse: collapse;border-collapse: collapse;">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</th>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255)">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_19" id="x_Layout_19" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:100%; line-height:10px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" valign="top" align="center" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_19"></a>
<table width="100%" class="x_rnb-container" cellpadding="0" border="0" bgcolor="#ffffff" align="center" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;background-color:rgb(255,255,255)">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" align="center" style="border-collapse: collapse;border-collapse: collapse;">
<table cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;border-radius:5px; width:null; max-width:100px!important; border-top:0px None #000; border-right:0px None #000; border-bottom:0px None #000; border-left:0px None #000; border-collapse:separate; border-radius:0px">
<div style="margin: 0px; padding: 0px;"><img border="0" hspace="0" vspace="0" width="" class="x_rnb-header-img" alt="" style="display:block; float:left; border-radius:5px" src="https://img.mailinblue.com/3654192/images/rnb/original/60791331dcabb54db12104b0.png"></div>
<div style="margin: 0px; padding: 0px;clear:both"></div>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_8651" id="x_Layout_8651" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:590px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" valign="top" align="center" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_8651"></a>
<table width="100%" cellpadding="0" border="0" height="38" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" height="38" style="border-collapse: collapse;border-collapse: collapse;">
<img width="20" height="38" alt="" style="display:block; max-height:38px; max-width:20px" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255)">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_22" id="x_Layout_22" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:100%; line-height:10px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" valign="top" align="center" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_22"></a>
<table width="100%" class="x_rnb-container" cellpadding="0" border="0" bgcolor="#ffffff" align="center" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;background-color:rgb(255,255,255)">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" align="center" style="border-collapse: collapse;border-collapse: collapse;">
<table cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;border-radius:5px; width:null; max-width:50px!important; border-top:0px None #000; border-right:0px None #000; border-bottom:0px None #000; border-left:0px None #000; border-collapse:separate; border-radius:0px">
<div style="margin: 0px; padding: 0px;"><img border="0" hspace="0" vspace="0" width="" class="x_rnb-header-img" alt="" style="display:block; float:left; border-radius:5px" src="https://img.mailinblue.com/3654192/images/rnb/original/607913837596362e5a00af23.png"></div>
<div style="margin: 0px; padding: 0px;clear:both"></div>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_7622" id="x_Layout_7622" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:590px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" valign="top" align="center" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_7622"></a>
<table width="100%" cellpadding="0" border="0" height="38" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" height="38" style="border-collapse: collapse;border-collapse: collapse;">
<img width="20" height="38" alt="" style="display:block; max-height:38px; max-width:20px" src="https://img.mailinblue.com/new_images/rnb/rnb_space.gif">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(255,255,255)">
<table class="x_rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_20" id="x_Layout_20" style="min-width: 0px !important;border-collapse: collapse;border-spacing: 0px;min-width:100%; line-height:10px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" valign="top" align="center" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_20"></a>
<table width="100%" class="x_rnb-container" cellpadding="0" border="0" bgcolor="#ffffff" align="center" cellspacing="0" style="border-collapse: collapse;border-spacing: 0px;background-color:rgb(255,255,255)">
<tbody>
<tr style="border-collapse: collapse;">
<td valign="top" align="center" style="border-collapse: collapse;border-collapse: collapse;">
<table cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;border-spacing: 0px;">
<tbody>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;border-radius:5px; width:32; max-width:32px!important; border-top:0px None #000; border-right:0px None #000; border-bottom:0px None #000; border-left:0px None #000; border-collapse:separate; border-radius:0px">
<div style="margin: 0px; padding: 0px;"><img border="0" hspace="0" vspace="0" width="32" class="x_rnb-header-img" alt="" style="display:block; float:left; border-radius:5px" src="https://img.mailinblue.com/3654192/images/rnb/original/60790d261ebfb17d8c14154a.png"></div>
<div style="margin: 0px; padding: 0px;clear:both"></div>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td align="center" valign="top" style="border-collapse: collapse;border-collapse: collapse;">
<div style="margin: 0px; padding: 0px;background-color:rgb(249,250,252)">
<table class="x_rnb-del-min-width x_rnb-tmpl-width" width="100%" cellpadding="0" border="0" cellspacing="0" name="x_Layout_7" id="x_Layout_7" style="min-width: 0px !important;width: 100% !important;border-collapse: collapse;border-spacing: 0px;min-width:590px">
<tbody>
<tr style="border-collapse: collapse;">
<td class="x_rnb-del-min-width" align="center" valign="top" style="min-width: 0px !important;border-collapse: collapse;border-collapse: collapse;min-width:590px">
<a href="" name="x_Layout_7"></a>
<table width="100%" cellpadding="0" border="0" align="center" cellspacing="0" bgcolor="#f9fafc" style="border-collapse: collapse;border-spacing: 0px;padding-right:20px; padding-left:20px; background-color:rgb(249,250,252)">
<tbody>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
<tr style="border-collapse: collapse;">
<td style="border-collapse: collapse;border-collapse: collapse;font-size:14px; color:#888888; font-weight:normal; text-align:center; font-family:Arial,Helvetica,sans-serif">
<div style="margin: 0px; padding: 0px;">
<div style="margin: 0px; padding: 0px;">© 2021 Teleperformance Colombia WAPPS</div>
</div>
</td>
</tr>
<tr style="border-collapse: collapse;">
<td height="20" style="border-collapse: collapse;border-collapse: collapse;font-size:1px; line-height:20px">
&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<img width="1" height="1" alt="" src="https://dgfebjc.r.bh.d.sendibt3.com/tr/op/biqRarJe8ba3tGHXHU2sDh2TY76E6jBcdpI2XOir6R7ChdxPlPhkzNTJz_CtKC3QL8g_jbBVgGrNKnIG9wNurQciyXKF9QymzdWlvRLjJwhhMwE2_mhZH3j91AkBeDPFtGu9wLEt1MjP4w">
</div>
</div>
</body>
</html>
`
}