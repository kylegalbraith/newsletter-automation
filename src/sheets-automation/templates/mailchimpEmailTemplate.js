module.exports = class MailChimpEmailTemplate {
	/* 
	 * Replace this email template with your own MailChimp template.
	 * This template should contain the ##replace...## tags that you want to
	 * replace during generation.
	*/
    getEmailTemplate() {
        var template = `<!doctype html>
		<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
		
		<head>
			<!-- NAME: SIMPLE TEXT -->
			<!--[if gte mso 15]>
				<xml>
					<o:OfficeDocumentSettings>
					<o:AllowPNG/>
					<o:PixelsPerInch>96</o:PixelsPerInch>
					</o:OfficeDocumentSettings>
				</xml>
				<![endif]-->
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<title>*|MC:SUBJECT|*</title>
		
			<style type="text/css">
				p {
					margin: 10px 0;
					padding: 0;
				}
		
				table {
					border-collapse: collapse;
				}
		
				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					display: block;
					margin: 0;
					padding: 0;
				}
		
				img,
				a img {
					border: 0;
					height: auto;
					outline: none;
					text-decoration: none;
				}
		
				body,
				#bodyTable,
				#bodyCell {
					height: 100%;
					margin: 0;
					padding: 0;
					width: 100%;
				}
		
				.mcnPreviewText {
					display: none !important;
				}
		
				#outlook a {
					padding: 0;
				}
		
				img {
					-ms-interpolation-mode: bicubic;
				}
		
				table {
					mso-table-lspace: 0pt;
					mso-table-rspace: 0pt;
				}
		
				.ReadMsgBody {
					width: 100%;
				}
		
				.ExternalClass {
					width: 100%;
				}
		
				p,
				a,
				li,
				td,
				blockquote {
					mso-line-height-rule: exactly;
				}
		
				a[href^=tel],
				a[href^=sms] {
					color: inherit;
					cursor: default;
					text-decoration: none;
				}
		
				p,
				a,
				li,
				td,
				body,
				table,
				blockquote {
					-ms-text-size-adjust: 100%;
					-webkit-text-size-adjust: 100%;
				}
		
				.ExternalClass,
				.ExternalClass p,
				.ExternalClass td,
				.ExternalClass div,
				.ExternalClass span,
				.ExternalClass font {
					line-height: 100%;
				}
		
				a[x-apple-data-detectors] {
					color: inherit !important;
					text-decoration: none !important;
					font-size: inherit !important;
					font-family: inherit !important;
					font-weight: inherit !important;
					line-height: inherit !important;
				}
		
				#bodyCell {
					padding: 10px;
				}
		
				.templateContainer {
					max-width: 600px !important;
				}
		
				a.mcnButton {
					display: block;
				}
		
				.mcnImage,
				.mcnRetinaImage {
					vertical-align: bottom;
				}
		
				.mcnTextContent {
					word-break: break-word;
				}
		
				.mcnTextContent img {
					height: auto !important;
				}
		
				.mcnDividerBlock {
					table-layout: fixed !important;
				}
		
				/*
			@tab Page
			@section Background Style
			@tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
			*/
		
				body,
				#bodyTable {
					/*@editable*/
					background-color: #FFFFFF;
					/*@editable*/
					background-image: none;
					/*@editable*/
					background-repeat: no-repeat;
					/*@editable*/
					background-position: center;
					/*@editable*/
					background-size: cover;
				}
		
				/*
			@tab Page
			@section Background Style
			@tip Set the background color and top border for your email. You may want to choose colors that match your company's branding.
			*/
		
				#bodyCell {
					/*@editable*/
					border-top: 0;
				}
		
				/*
			@tab Page
			@section Email Border
			@tip Set the border for your email.
			*/
		
				.templateContainer {
					/*@editable*/
					border: 0;
				}
		
				/*
			@tab Page
			@section Heading 1
			@tip Set the styling for all first-level headings in your emails. These should be the largest of your headings.
			@style heading 1
			*/
		
				h1 {
					/*@editable*/
					color: #202020;
					/*@editable*/
					font-family: Helvetica;
					/*@editable*/
					font-size: 26px;
					/*@editable*/
					font-style: normal;
					/*@editable*/
					font-weight: bold;
					/*@editable*/
					line-height: 125%;
					/*@editable*/
					letter-spacing: normal;
					/*@editable*/
					text-align: left;
				}
		
				/*
			@tab Page
			@section Heading 2
			@tip Set the styling for all second-level headings in your emails.
			@style heading 2
			*/
		
				h2 {
					/*@editable*/
					color: #202020;
					/*@editable*/
					font-family: Helvetica;
					/*@editable*/
					font-size: 22px;
					/*@editable*/
					font-style: normal;
					/*@editable*/
					font-weight: bold;
					/*@editable*/
					line-height: 125%;
					/*@editable*/
					letter-spacing: normal;
					/*@editable*/
					text-align: left;
				}
		
				/*
			@tab Page
			@section Heading 3
			@tip Set the styling for all third-level headings in your emails.
			@style heading 3
			*/
		
				h3 {
					/*@editable*/
					color: #202020;
					/*@editable*/
					font-family: Helvetica;
					/*@editable*/
					font-size: 20px;
					/*@editable*/
					font-style: normal;
					/*@editable*/
					font-weight: bold;
					/*@editable*/
					line-height: 125%;
					/*@editable*/
					letter-spacing: normal;
					/*@editable*/
					text-align: left;
				}
		
				/*
			@tab Page
			@section Heading 4
			@tip Set the styling for all fourth-level headings in your emails. These should be the smallest of your headings.
			@style heading 4
			*/
		
				h4 {
					/*@editable*/
					color: #202020;
					/*@editable*/
					font-family: Helvetica;
					/*@editable*/
					font-size: 18px;
					/*@editable*/
					font-style: normal;
					/*@editable*/
					font-weight: bold;
					/*@editable*/
					line-height: 125%;
					/*@editable*/
					letter-spacing: normal;
					/*@editable*/
					text-align: left;
				}
		
				/*
			@tab Header
			@section Header Style
			@tip Set the borders for your email's header area.
			*/
		
				#templateHeader {
					/*@editable*/
					border-top: 0;
					/*@editable*/
					border-bottom: 0;
				}
		
				/*
			@tab Header
			@section Header Text
			@tip Set the styling for your email's header text. Choose a size and color that is easy to read.
			*/
		
				#templateHeader .mcnTextContent,
				#templateHeader .mcnTextContent p {
					/*@editable*/
					color: #202020;
					/*@editable*/
					font-family: Helvetica;
					/*@editable*/
					font-size: 16px;
					/*@editable*/
					line-height: 150%;
					/*@editable*/
					text-align: left;
				}
		
				/*
			@tab Header
			@section Header Link
			@tip Set the styling for your email's header links. Choose a color that helps them stand out from your text.
			*/
		
				#templateHeader .mcnTextContent a,
				#templateHeader .mcnTextContent p a {
					/*@editable*/
					color: #2BAADF;
					/*@editable*/
					font-weight: normal;
					/*@editable*/
					text-decoration: underline;
				}
		
				/*
			@tab Body
			@section Body Style
			@tip Set the borders for your email's body area.
			*/
		
				#templateBody {
					/*@editable*/
					border-top: 0;
					/*@editable*/
					border-bottom: 0;
				}
		
				/*
			@tab Body
			@section Body Text
			@tip Set the styling for your email's body text. Choose a size and color that is easy to read.
			*/
		
				#templateBody .mcnTextContent,
				#templateBody .mcnTextContent p {
					/*@editable*/
					color: #202020;
					/*@editable*/
					font-family: Helvetica;
					/*@editable*/
					font-size: 16px;
					/*@editable*/
					line-height: 150%;
					/*@editable*/
					text-align: left;
				}
		
				/*
			@tab Body
			@section Body Link
			@tip Set the styling for your email's body links. Choose a color that helps them stand out from your text.
			*/
		
				#templateBody .mcnTextContent a,
				#templateBody .mcnTextContent p a {
					/*@editable*/
					color: #2BAADF;
					/*@editable*/
					font-weight: normal;
					/*@editable*/
					text-decoration: underline;
				}
		
				/*
			@tab Footer
			@section Footer Style
			@tip Set the borders for your email's footer area.
			*/
		
				#templateFooter {
					/*@editable*/
					border-top: 0;
					/*@editable*/
					border-bottom: 0;
				}
		
				/*
			@tab Footer
			@section Footer Text
			@tip Set the styling for your email's footer text. Choose a size and color that is easy to read.
			*/
		
				#templateFooter .mcnTextContent,
				#templateFooter .mcnTextContent p {
					/*@editable*/
					color: #202020;
					/*@editable*/
					font-family: Helvetica;
					/*@editable*/
					font-size: 12px;
					/*@editable*/
					line-height: 150%;
					/*@editable*/
					text-align: left;
				}
		
				/*
			@tab Footer
			@section Footer Link
			@tip Set the styling for your email's footer links. Choose a color that helps them stand out from your text.
			*/
		
				#templateFooter .mcnTextContent a,
				#templateFooter .mcnTextContent p a {
					/*@editable*/
					color: #202020;
					/*@editable*/
					font-weight: normal;
					/*@editable*/
					text-decoration: underline;
				}
		
				@media only screen and (min-width:768px) {
					.templateContainer {
						width: 600px !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					body,
					table,
					td,
					p,
					a,
					li,
					blockquote {
						-webkit-text-size-adjust: none !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					body {
						width: 100% !important;
						min-width: 100% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					#bodyCell {
						padding-top: 10px !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcnRetinaImage {
						max-width: 100% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcnImage {
						width: 100% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcnCartContainer,
					.mcnCaptionTopContent,
					.mcnRecContentContainer,
					.mcnCaptionBottomContent,
					.mcnTextContentContainer,
					.mcnBoxedTextContentContainer,
					.mcnImageGroupContentContainer,
					.mcnCaptionLeftTextContentContainer,
					.mcnCaptionRightTextContentContainer,
					.mcnCaptionLeftImageContentContainer,
					.mcnCaptionRightImageContentContainer,
					.mcnImageCardLeftTextContentContainer,
					.mcnImageCardRightTextContentContainer,
					.mcnImageCardLeftImageContentContainer,
					.mcnImageCardRightImageContentContainer {
						max-width: 100% !important;
						width: 100% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcnBoxedTextContentContainer {
						min-width: 100% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcnImageGroupContent {
						padding: 9px !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcnCaptionLeftContentOuter .mcnTextContent,
					.mcnCaptionRightContentOuter .mcnTextContent {
						padding-top: 9px !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcnImageCardTopImageContent,
					.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,
					.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent {
						padding-top: 18px !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcnImageCardBottomImageContent {
						padding-bottom: 9px !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcnImageGroupBlockInner {
						padding-top: 0 !important;
						padding-bottom: 0 !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcnImageGroupBlockOuter {
						padding-top: 9px !important;
						padding-bottom: 9px !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcnTextContent,
					.mcnBoxedTextContentColumn {
						padding-right: 18px !important;
						padding-left: 18px !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcnImageCardLeftImageContent,
					.mcnImageCardRightImageContent {
						padding-right: 18px !important;
						padding-bottom: 0 !important;
						padding-left: 18px !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					.mcpreview-image-uploader {
						display: none !important;
						width: 100% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					/*
			@tab Mobile Styles
			@section Heading 1
			@tip Make the first-level headings larger in size for better readability on small screens.
			*/
					h1 {
						/*@editable*/
						font-size: 22px !important;
						/*@editable*/
						line-height: 125% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					/*
			@tab Mobile Styles
			@section Heading 2
			@tip Make the second-level headings larger in size for better readability on small screens.
			*/
					h2 {
						/*@editable*/
						font-size: 20px !important;
						/*@editable*/
						line-height: 125% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					/*
			@tab Mobile Styles
			@section Heading 3
			@tip Make the third-level headings larger in size for better readability on small screens.
			*/
					h3 {
						/*@editable*/
						font-size: 18px !important;
						/*@editable*/
						line-height: 125% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					/*
			@tab Mobile Styles
			@section Heading 4
			@tip Make the fourth-level headings larger in size for better readability on small screens.
			*/
					h4 {
						/*@editable*/
						font-size: 16px !important;
						/*@editable*/
						line-height: 150% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					/*
			@tab Mobile Styles
			@section Boxed Text
			@tip Make the boxed text larger in size for better readability on small screens. We recommend a font size of at least 16px.
			*/
					table.mcnBoxedTextContentContainer td.mcnTextContent,
					td.mcnBoxedTextContentContainer td.mcnTextContent p {
						/*@editable*/
						font-size: 14px !important;
						/*@editable*/
						line-height: 150% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					/*
			@tab Mobile Styles
			@section Header Text
			@tip Make the header text larger in size for better readability on small screens.
			*/
					td#templateHeader td.mcnTextContent,
					td#templateHeader td.mcnTextContent p {
						/*@editable*/
						font-size: 16px !important;
						/*@editable*/
						line-height: 150% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					/*
			@tab Mobile Styles
			@section Body Text
			@tip Make the body text larger in size for better readability on small screens. We recommend a font size of at least 16px.
			*/
					td#templateBody td.mcnTextContent,
					td#templateBody td.mcnTextContent p {
						/*@editable*/
						font-size: 16px !important;
						/*@editable*/
						line-height: 150% !important;
					}
		
				}
		
				@media only screen and (max-width: 480px) {
					/*
			@tab Mobile Styles
			@section Footer Text
			@tip Make the footer content text larger in size for better readability on small screens.
			*/
					td#templateFooter td.mcnTextContent,
					td#templateFooter td.mcnTextContent p {
						/*@editable*/
						font-size: 14px !important;
						/*@editable*/
						line-height: 150% !important;
					}
		
				}
			</style>
		</head>
		
		<body>
			<!--*|IF:MC_PREVIEW_TEXT|*-->
			<!--[if !gte mso 9]><!---->
			<span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">*|MC_PREVIEW_TEXT|*</span>
			<!--<![endif]-->
			<!--*|END:IF|*-->
			<center>
				<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
					<tr>
						<td align="left" valign="top" id="bodyCell">
							<!-- BEGIN TEMPLATE // -->
							<!--[if (gte mso 9)|(IE)]>
								<table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
								<tr>
								<td align="center" valign="top" width="600" style="width:600px;">
								<![endif]-->
							<table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
								<tr>
									<td valign="top" id="templateHeader">
										<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
											<tbody class="mcnTextBlockOuter">
												<tr>
													<td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
														<!--[if mso]>
						<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
						<tr>
						<![endif]-->
		
														<!--[if mso]>
						<td valign="top" width="600" style="width:600px;">
						<![endif]-->
														<table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
															<tbody>
																<tr>
		
																	<td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
		
																		<h1 style="text-align: center;">☁️ 📖 Learn By Doing Volume ##replaceVolumeNumber# 💻🔨</h1>
		
																	</td>
																</tr>
															</tbody>
														</table>
														<!--[if mso]>
						</td>
						<![endif]-->
		
														<!--[if mso]>
						</tr>
						</table>
						<![endif]-->
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
								<tr>
									<td valign="top" id="templateBody">
										<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
											<tbody class="mcnTextBlockOuter">
												<tr>
													<td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
														<!--[if mso]>
						<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
						<tr>
						<![endif]-->
		
														<!--[if mso]>
						<td valign="top" width="600" style="width:600px;">
						<![endif]-->
														<table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
															<tbody>
																<tr>
		
																	<td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
		
																		<div style="text-align: left;">Hey there!
																			<br>
																			<br> #replacePara1#
																			<br>
																			<br> #replacePara2#
																			<br>
																			<br> #replacePara3#</div>
		
																	</td>
																</tr>
															</tbody>
														</table>
														<!--[if mso]>
						</td>
						<![endif]-->
		
														<!--[if mso]>
						</tr>
						</table>
						<![endif]-->
													</td>
												</tr>
											</tbody>
										</table>
										<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
											<tbody class="mcnTextBlockOuter">
												<tr>
													<td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
														<!--[if mso]>
						<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
						<tr>
						<![endif]-->
		
														<!--[if mso]>
						<td valign="top" width="600" style="width:600px;">
						<![endif]-->
														<table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
															<tbody>
																<tr>
		
																	<td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
		
																		<div style="text-align: center;">
																			<span style="font-size:12px">
																				<em>Do you or your company want to sponsor a weekly newsletter? I would love to provide a space for you to
																					do so! Please send me an email so we can talk about it.</em>
																			</span>
																		</div>
		
																	</td>
																</tr>
															</tbody>
														</table>
														<!--[if mso]>
						</td>
						<![endif]-->
		
														<!--[if mso]>
						</tr>
						</table>
						<![endif]-->
													</td>
												</tr>
											</tbody>
										</table>
										<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
											<tbody class="mcnTextBlockOuter">
												<tr>
													<td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
														<!--[if mso]>
						<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
						<tr>
						<![endif]-->
		
														<!--[if mso]>
						<td valign="top" width="600" style="width:600px;">
						<![endif]-->
														<table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
															<tbody>
																<tr>
		
																	<td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
		
																		<br>
																		<span style="font-size:24px">Cloud</span>
																		<br>
																		<br>
																		<span style="font-size:14px">#replaceCloud#</span>
																	</td>
																</tr>
															</tbody>
														</table>
														<!--[if mso]>
						</td>
						<![endif]-->
		
														<!--[if mso]>
						</tr>
						</table>
						<![endif]-->
													</td>
												</tr>
											</tbody>
										</table>
										<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
											<tbody class="mcnTextBlockOuter">
												<tr>
													<td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
														<!--[if mso]>
						<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
						<tr>
						<![endif]-->
		
														<!--[if mso]>
						<td valign="top" width="600" style="width:600px;">
						<![endif]-->
														<table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
															<tbody>
																<tr>
		
																	<td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
		
																		<br>
																		<span style="font-size:24px">Blockchain</span>
																		<br>
																		<br>
																		<span style="font-size:14px">#replaceBlockchain#</span>
																	</td>
																</tr>
															</tbody>
														</table>
														<!--[if mso]>
						</td>
						<![endif]-->
		
														<!--[if mso]>
						</tr>
						</table>
						<![endif]-->
													</td>
												</tr>
											</tbody>
										</table>
										<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
											<tbody class="mcnTextBlockOuter">
												<tr>
													<td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
														<!--[if mso]>
						<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
						<tr>
						<![endif]-->
		
														<!--[if mso]>
						<td valign="top" width="600" style="width:600px;">
						<![endif]-->
														<table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
															<tbody>
																<tr>
		
																	<td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
		
																		<br>
																		<span style="font-size:24px">&lt;/code&gt; Languages</span>
																		<br>
																		<br>
																		<span style="font-size:14px">#replaceCoding#</span>
																	</td>
																</tr>
															</tbody>
														</table>
														<!--[if mso]>
						</td>
						<![endif]-->
		
														<!--[if mso]>
						</tr>
						</table>
						<![endif]-->
													</td>
												</tr>
											</tbody>
										</table>
										<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
											<tbody class="mcnTextBlockOuter">
												<tr>
													<td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
														<!--[if mso]>
						<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
						<tr>
						<![endif]-->
		
														<!--[if mso]>
						<td valign="top" width="600" style="width:600px;">
						<![endif]-->
														<table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
															<tbody>
																<tr>
		
																	<td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
		
																		<br>
																		<span style="font-size:24px">:) Cool find of the week</span>
																		<br>
																		<br>
																		<span style="font-size:14px">#replaceCoolFind#</span>
																	</td>
																</tr>
															</tbody>
														</table>
														<!--[if mso]>
						</td>
						<![endif]-->
		
														<!--[if mso]>
						</tr>
						</table>
						<![endif]-->
													</td>
												</tr>
											</tbody>
										</table>
										<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width:100%;">
											<tbody class="mcnTextBlockOuter">
												<tr>
													<td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
														<!--[if mso]>
				<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
				<tr>
				<![endif]-->
		
														<!--[if mso]>
				<td valign="top" width="600" style="width:600px;">
				<![endif]-->
														<table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
															<tbody>
																<tr>
		
																	<td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
		
																		<br>
																		<span style="font-size:24px">Hungry to learn Amazon Web Services?</span>
																		<br>
																		<br>
																		<span style="font-size:14px">If you have been trying to learn AWS and are feeling lost, than consider picking up my ebook + video course
																			that focuses on learning the platform by actually using it.
																			<a href="https://www.kylegalbraith.com/learn-aws/">Grab a package today</a> at 35% off.</span>
																	</td>
																</tr>
															</tbody>
														</table>
														<!--[if mso]>
				</td>
				<![endif]-->
		
														<!--[if mso]>
				</tr>
				</table>
				<![endif]-->
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td valign="top" id="templateFooter">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
								<tbody class="mcnFollowBlockOuter">
									<tr>
										<td align="center" valign="top" style="padding:9px" class="mcnFollowBlockInner">
											<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer" style="min-width:100%;">
												<tbody>
													<tr>
														<td align="center" style="padding-left:9px;padding-right:9px;">
															<table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnFollowContent">
																<tbody>
																	<tr>
																		<td align="center" valign="top" style="padding-top:9px; padding-right:9px; padding-left:9px;">
																			<table align="center" border="0" cellpadding="0" cellspacing="0">
																				<tbody>
																					<tr>
																						<td align="center" valign="top">
																							<!--[if mso]>
											<table align="center" border="0" cellspacing="0" cellpadding="0">
											<tr>
											<![endif]-->
		
																							<!--[if mso]>
												<td align="center" valign="top">
												<![endif]-->
		
		
																							<table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
																								<tbody>
																									<tr>
																										<td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
																											<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
																												<tbody>
																													<tr>
																														<td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
																															<table align="left" border="0" cellpadding="0" cellspacing="0" width="">
																																<tbody>
																																	<tr>
		
																																		<td align="center" valign="middle" width="24" class="mcnFollowIconContent">
																																			<a href="https://medium.com/@kyle.galbraith" target="_blank">
																																				<img src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-medium-48.png" style="display:block;"
																																				 height="24" width="24" class="">
																																			</a>
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
		
																							<!--[if mso]>
												</td>
												<![endif]-->
		
																							<!--[if mso]>
												<td align="center" valign="top">
												<![endif]-->
		
		
																							<table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
																								<tbody>
																									<tr>
																										<td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
																											<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
																												<tbody>
																													<tr>
																														<td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
																															<table align="left" border="0" cellpadding="0" cellspacing="0" width="">
																																<tbody>
																																	<tr>
		
																																		<td align="center" valign="middle" width="24" class="mcnFollowIconContent">
																																			<a href="https://twitter.com/kylegalbraith" target="_blank">
																																				<img src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-twitter-48.png" style="display:block;"
																																				 height="24" width="24" class="">
																																			</a>
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
		
																							<!--[if mso]>
												</td>
												<![endif]-->
		
																							<!--[if mso]>
												<td align="center" valign="top">
												<![endif]-->
		
		
																							<table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
																								<tbody>
																									<tr>
																										<td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
																											<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
																												<tbody>
																													<tr>
																														<td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
																															<table align="left" border="0" cellpadding="0" cellspacing="0" width="">
																																<tbody>
																																	<tr>
		
																																		<td align="center" valign="middle" width="24" class="mcnFollowIconContent">
																																			<a href="https://www.kylegalbraith.com/learn-aws/" target="_blank">
																																				<img src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-link-48.png" style="display:block;"
																																				 height="24" width="24" class="">
																																			</a>
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
		
																							<!--[if mso]>
												</td>
												<![endif]-->
		
																							<!--[if mso]>
												<td align="center" valign="top">
												<![endif]-->
		
		
																							<table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
																								<tbody>
																									<tr>
																										<td valign="top" style="padding-right:0; padding-bottom:9px;" class="mcnFollowContentItemContainer">
																											<table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
																												<tbody>
																													<tr>
																														<td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
																															<table align="left" border="0" cellpadding="0" cellspacing="0" width="">
																																<tbody>
																																	<tr>
		
																																		<td align="center" valign="middle" width="24" class="mcnFollowIconContent">
																																			<a href="https://www.linkedin.com/in/kylegalbraith459/" target="_blank">
																																				<img src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-linkedin-48.png" style="display:block;"
																																				 height="24" width="24" class="">
																																			</a>
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
		
																							<!--[if mso]>
												</td>
												<![endif]-->
		
																							<!--[if mso]>
											</tr>
											</table>
											<![endif]-->
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
		
										</td>
									</tr>
								</tbody>
							</table>
							<table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
								<tbody class="mcnTextBlockOuter">
									<tr>
										<td valign="top" class="mcnTextBlockInner" style="padding-top:9px;">
											<!--[if mso]>
						<table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
						<tr>
						<![endif]-->
		
											<!--[if mso]>
						<td valign="top" width="600" style="width:600px;">
						<![endif]-->
											<table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width:100%; min-width:100%;" width="100%" class="mcnTextContentContainer">
												<tbody>
													<tr>
		
														<td valign="top" class="mcnTextContent" style="padding-top:0; padding-right:18px; padding-bottom:9px; padding-left:18px;">
		
															<div style="text-align: center;">Want to change how you receive these emails?
																<br> You can
																<a href="*|UPDATE_PROFILE|*">update your preferences</a> or
																<a href="*|UNSUB|*">unsubscribe from this list</a>.
																<br>
																<br> *|IF:REWARDS|* *|HTML:REWARDS|* *|END:IF|*</div>
		
														</td>
													</tr>
												</tbody>
											</table>
											<!--[if mso]>
						</td>
						<![endif]-->
		
											<!--[if mso]>
						</tr>
						</table>
						<![endif]-->
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</table>
				<!--[if (gte mso 9)|(IE)]>
								</td>
								</tr>
								</table>
								<![endif]-->
				<!-- // END TEMPLATE -->
				</td>
				</tr>
				</table>
			</center>
		</body>
		
		</html>
        `;

        return template;
	}
	
	getFormattedArticle(link, title, text) {
		return `<a href='${link}?utm_source=newsletter&utm_medium=email&utm_campaign=Learn%20By%20Doing' target='_blank' style='mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #2BAADF;font-weight: normal;text-decoration: underline;'>${title}</a><br>${text}<br><br>`;               
	}
}