/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

/*
 *
 * Do *NOT* translate the string keys on the left of the colon.  These string
 *    keys *MUST* match the string values inherited from the JS source.
 *
 */

define(["text!./license.html"], function (licenseText) {
    "use strict";
    
    return {
	"EXTENSION_NAME": "Extract for Brackets (Preview)",

        // Menus
	"MENU_CC_SIGN_IN": "Creative Cloud에 로그인\u2026",
	"MENU_CC_SIGN_OUT": "Creative Cloud 로그아웃",
	"MENU_HELP_ONLINE": "Extract for Brackets 온라인 도움말",
	"MENU_HELP_TUTORIAL": "Extract for Brackets 자습서 열기",

        // EULA
	"EULA_DIALOG_TITLE": "Extract for Brackets (Preview) 소프트웨어 사용권 계약",
	"EULA_HEADER": "Adobe 소프트웨어 사용권 계약은 Extract for Brackets (Preview) 기능의 사용에만 적용되며 전체 Brackets에는 적용되지 않습니다. 동의하지 않는 경우 Extract for Brackets (Preview)를 사용할 수 없습니다. Brackets는 계속 정상적으로 작동하며 MIT 라이선스의 적용을 받습니다. 사용권 계약에 대한 동의 없이도 Brackets를 사용할 수 있습니다.",
        "EULA_CONTENT":                     licenseText,
	"EULA_OPT_OUT_NOTICE": "<span class='dialog-notice-header strong'>사용 통계</span><br>Extract for Brackets를 개선할 목적으로 사용자가 확장명을 사용하는 방식에 대한 <strong>익명</strong> 데이터가 정기적으로 전송됩니다. 언제든지 Extract 패널의 <span class=\"e4b-settings-icon\"/> 아이콘을 클릭하고 \"익명 사용 통계 전송\" 설정을 수정하여 환경 설정을 변경할 수 있습니다. <a href=\"{PRIVACY_URL}\">자세히 알아보기</a>",
	"TERMS_OF_USE": "사용 약관",

	"EULA_BTN_ACCEPT": "동의",
	"EULA_BTN_DECLINE": "동의하지 않음",

	"EXPLORE_EXTRACT_FOR_BRACKETS": "Extract for Brackets (Preview)",

	"FIRSTLAUNCH_POPUP_MSG": "<br>Extract for Brackets (Preview)<br>를 시작하려면 여기를 클릭하십시오.",
	"GOT_IT": "알겠습니다!",

	"CALL_TO_ACTION_TITLE": "Extract는 <strong>Creative Cloud</strong> 서비스입니다.",
	"CALL_TO_ACTION_MESSAGE": "Adobe ID로 로그인하고 나면 PSD를 업로드하거나 기존에 업로드된 PSD를 볼 수 있으며 디자인 정보와 에셋을 추출할 수 있습니다.",
	"CALL_TO_ACTION_BUTTON": "무료 로그인\u2026",

        // Commands
	"SHOW_EXTRACT_FOR_BRACKETS": "Extract for Brackets (Preview) 표시",
	"RESET_TO_FIRST_LAUNCH": "최초 실행을 위한 Extract for Brackets 재설정",
	"CMD_GUIDED_TUTORIAL": "Extract for Brackets 자습서",

	"MORE_INFO": "추가 정보...",

	"OPEN_A_PSD": "내 PSD 사용",
	"SHOW_HIDE_LAYERS": "레이어 패널 켜기/끄기",
        
	"TOOLBAR_HIDE": "숨김",
	"TOOLBAR_HIDE_HINT": "시작하기",
	"TOOLBAR_OR": "또는",
	"GET_STARTED": "PSD 열기\u2026",
	"GET_STARTED_DESCRIPTION": "Adobe ID로 로그인하고 나면 PSD를 업로드하거나 기존에 업로드된 PSD를 볼 수 있으며 디자인 정보와 에셋을 추출할 수 있습니다.",
	"SIGN_UP": "계정이 없으십니까?",
	"SIGN_UP_LINK": "무료 계정을 만드세요.",
	"CREATIVE_URL_LABEL": "Creative Cloud 공유 링크 붙여넣기",
	"CREATIVE_URL_INVALID": "\'<span class='dialog-filename'>{0}</span>\'은(는) 올바른 Creative Cloud 공유 링크(예: Adobe.ly 짧은 URL)가 아닙니다. <a href='{HELP_SHARED_LINK_URL}'>여기</a>를 클릭하여 Creative Cloud 계정에서 파일을 공유하는 방법에 대해 알아보십시오.",
	"CREATIVE_URL_DESCRIPTION": "또는 간단히 Creative Cloud 공유 링크를 붙여넣어 로그인하지 않고도 PSD를 열 수 있습니다. <a href='{HELP_SHARED_LINK_URL}'>Creative Cloud 공유 링크에 대한 추가 정보</a>",
	"RESOLVING_CREATIVE_URL": "\"{0}\" 해결 중\u2026",

	"UNSUPPORTED_BLEND_MODES": "파일이 지원되지 않는 혼합 모드를 포함하고 있습니다. 렌더링이 정확하지 않을 수 있습니다.",

	"HINTS_HEADSUP": "PSD와 관련된 코드 힌트를 보려면 커서를 CSS 규칙 안에 놓으십시오.",

	"CSS_ALL_FONT_STYLES": "모든 글꼴 스타일",

	"EXTRACT_INVALID_CHARS": "잘못된 파일 이름: {0}<br>파일 이름은 올바르지 않은 문자(예: <code>{1}</code>)나 문자 시퀀스를 포함할 수 없습니다.",
	"EXTRACT_ALREADY_EXISTS": "{0} <span class='dialog-filename'>{1}</span>이(가) 이미 존재합니다.",
	"EXTRACT_UNABLE_TO_WRITE": "<span class='dialog-filename'>{1}</span>(으)로 {0}을(를) 작성할 수 없습니다.<br>{2}",
	"EXTRACT_BEFORE_RENAME": "이미지 추출:<ol><li>파일 이름/위치를 선택할 경로 편집</li><li>.JPG, .PNG 또는 .SVG 확장명 사용</li><li>ENTER를 눌러 다운로드</li></ol>필요 시 폴더가 새로 생성됩니다.",
	"EXTRACT_AFTER_RENAME": "<p class='callout-download-status'>에셋 추출 중\u2026</p><p>다른 파일 유형이나 이름을 생성하려면 코드 힌트를 다시 사용하십시오.</p>",
	"EXTRACT_DOWNLOADING_STATUS": "\"{0}\" 에셋 추출 중\u2026",
	"EXTRACT_DOWNLOAD_COMPLETE": "완료!",
	"EXTRACT_ASSET": "에셋 추출 중\u2026",
        
        // Preferences
	"PREF_DIALOG_TITLE": "환경 설정",
	"PREF_PRIVACY_TITLE": "사용 통계",
	"PREF_PRIVACY_MESSAGE": "Extract for Brackets를 개선할 목적으로 사용자가 확장명을 사용하는 방식에 대한 <strong>익명</strong> 데이터가 정기적으로 전송됩니다. <a href=\"{PRIVACY_URL}\">자세히 알아보기</a>",
	"PREF_PRIVACY_CHECKBOX_LABEL": "예. Extract for Brackets Extension 사용 방식에 대한 정보를 공유하겠습니다.",
        
        // SUSI Modal Interstitial
	"SUSI_LOADING_WINDOW_TITLE": "Adobe ID",
	"SUSI_LOADING_BASE": "로드 중\u2026",
	"SUSI_LOADING_AUTHORIZE": "Adobe ID 로드 중\u2026",
	"SUSI_LOADING_CHECK_STATUS": "Adobe ID 확인 중\u2026",
	"SUSI_LOADING_CHECK_TOKEN": "Adobe ID 확인 중\u2026",
	"SUSI_LOADING_PROFILE": "프로필 로드 중\u2026",
	"SUSI_LOADING_VALIDATE_TOKEN": "Adobe ID 확인 중\u2026",
	"SUSI_LOADING_LOGOUT": "로그아웃 중\u2026",

        // Buttons
	"CANCEL": "취소",
	"DONE": "완료",
	"CLOSE": "닫기",

        // Error messages
	"SVG_NOT_AVAILABLE": "이 레이어를 SVG로 내보낼 수 없습니다.",
	"STATIC_CONTENT_SVG_NOT_AVAILABLE": "데모 PSD에는 아직 SVG 내보내기 기능이 없습니다. JPG나 PNG 형식을 사용하거나 자신의 PSD를 업로드하십시오.",
	"OFFLINE_ERROR": "Creative Cloud 액세스 오류.",
	"SERVICE_ERROR": "Creative Cloud 액세스 오류: {0}. 다시 시도하시겠습니까?",
	"STATIC_CONTENT_SERVICE_ERROR": "데모 PSD에는 아직 레이어 병합 기능이 없습니다. 사용자 자신의 PSD를 업로드하고 다시 시도하십시오.",
	"FILE_FORMAT_ERROR": "지원되지 않는 파일 형식: {0}",
	"NO_VISIBLE_LAYERS_ERROR": "표시되는 레이어 없음. 이미지를 추출하려면 표시되는 레이어를 선택하십시오.",
	"ERROR_OFFLINE_MESSAGE_SIGN_IN": "로그인",
	"ERROR_OFFLINE_MESSAGE_SIGN_UP": "등록",
	"ERROR_OFFLINE_MESSAGE_SIGN_OUT": "로그아웃",
	"ERROR_OFFLINE_MESSAGE": "{0}하려면 인터넷에 연결해 주십시오.",
	"ERROR_OFFLINE_USE_CACHE_MESSAGE": "오프라인에서는 캐시 파일, CSS 값, 측정치 및 단일 레이어 이미지 추출에 대한 이용이 제한됩니다.",
	"ERROR_RENDER_TITLE": "파일 표시 도중 오류 발생",
	"ERROR_RENDER_MESSAGE": "<span class='dialog-filename'>{0}</span> 파일을 표시하는 도중 오류가 발생했습니다.",
	"ERROR_ASSET_LIST_MESSAGE": "<span class='dialog-filename'>{0}</span> 폴더를 확인하는 도중 오류가 발생했습니다.",

        // Override ccweb
	"Drag and Drop a PSD here": "여기로 PSD 파일을 드래그하여 업로드",
	"Upload PSD": "PSD 업로드",
	"UPLOADING": "업로드 중",
	"PROCESSING": "처리 중",
        
        // help callout
	"NEXT": "다음",
	"GUIDED_TUTORIAL_1": "Extract for Brackets를 시작할 레이어를 선택하십시오.",
	"GUIDED_TUTORIAL_2": "CSS 또는 이미지를 추출하려면 CSS 규칙 안에 있는 커서를 사용해 입력하거나 Ctrl-Space를 누릅니다.",
	"GUIDED_TUTORIAL_3": "객체 간 거리를 측정하려면 Shift 키를 누른 채 클릭하여 여러 레이어를 선택합니다.",
	"GUIDED_TUTORIAL_4": "자신의 콘텐츠에 Extract를 사용할 준비가 되었으면 다음 옵션 중 하나를 선택하십시오."
    };
});
