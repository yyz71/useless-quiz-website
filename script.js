{\rtf1\ansi\ansicpg950\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u28204 \u39511 \u30340 \u36984 \u38917 \u25976 \u25818 \
const options = [\
    "\uc0\u36984 \u38917  A\u65306 \u25105 \u24076 \u26395 \u33021 \u22816 \u25484 \u25569 \u23565 \u26410 \u20358 \u26041 \u21521 \u30340 \u32085 \u23565 \u25484 \u25511 \u27402 \u12290 ",\
    "\uc0\u36984 \u38917  B\u65306 \u25105 \u24076 \u26395 \u25105 \u30340 \u21162 \u21147 \u33021 \u34987 \u22806 \u30028 \u20805 \u20998 \u29702 \u35299 \u21644 \u32943 \u23450 \u12290 ",\
    "\uc0\u36984 \u38917  C\u65306 \u25105 \u24076 \u26395 \u25105 \u33021 \u22816 \u27704 \u36960 \u20445 \u25345 \u20839 \u24515 \u30340 \u24179 \u38748 \u21644 \u24179 \u34913 \u12290 "\
];\
\
// \uc0\u29554 \u21462 \u32178 \u38913 \u20803 \u32032 \
const optionsContainer = document.getElementById('options-container');\
const resultContainer = document.getElementById('result-container');\
const resultText = document.getElementById('result-text');\
\
// \uc0\u20989 \u25976 \u65306 \u28210 \u26579 \u36984 \u38917 \u25353 \u37397 \
function renderOptions() \{\
    options.forEach((optionText, index) => \{\
        const button = document.createElement('button');\
        button.className = 'option-button';\
        button.textContent = optionText;\
        \
        // \uc0\u26680 \u24515 \u37007 \u36655 \u65306 \u40670 \u25802 \u25353 \u37397 \u24460 \u65292 \u23559 \u35442 \u25353 \u37397 \u30340 \u25991 \u23383 \u20316 \u28858 \u32080 \u26524 \u39023 \u31034 \
        button.addEventListener('click', () => \{\
            handleSelection(optionText);\
        \});\
        \
        optionsContainer.appendChild(button);\
    \});\
\}\
\
// \uc0\u20989 \u25976 \u65306 \u34389 \u29702 \u36984 \u38917 \u36984 \u25799 \
function handleSelection(selectedOption) \{\
    // \uc0\u27493 \u39519  1: \u38577 \u34255 \u36984 \u38917 \u21312 \u22602 \
    optionsContainer.style.display = 'none';\
\
    // \uc0\u27493 \u39519  2: \u27169 \u25836 \u20998 \u26512 \u36942 \u31243 \u65288 \u21487 \u20197 \u22686 \u21152 \u24310 \u36978 \u20358 \u27169 \u20223 \u23560 \u26989 \u24863 \u65289 \
    resultText.textContent = '\uc0\u20998 \u26512 \u20013 ... \u35531 \u31245 \u20505 \u29255 \u21051 \u12290 ';\
    resultContainer.style.display = 'block';\
\
    // \uc0\u27493 \u39519  3: \u22312 \u24310 \u36978 \u24460 \u39023 \u31034 \u12300 \u33258 \u35657 \u12301 \u32080 \u26524 \
    setTimeout(() => \{\
        // \uc0\u26680 \u24515 \u35575 \u21050 \u65306 \u32080 \u26524 \u23601 \u26159 \u36984 \u38917 \u26412 \u36523 \u65281 \
        resultText.textContent = selectedOption; \
    \}, 2000); // \uc0\u24310 \u36978  2 \u31186 \u65292 \u22686 \u21152 \u12300 \u36939 \u31639 \u12301 \u30340 \u20736 \u24335 \u24863 \
\}\
\
// \uc0\u21855 \u21205 \u28204 \u39511 \
renderOptions();}