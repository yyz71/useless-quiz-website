// 測驗的選項數據
const options = [
    "選項 A：我希望能夠掌握對未來方向的絕對掌控權。",
    "選項 B：我希望我的努力能被外界充分理解和肯定。",
    "選項 C：我希望我能夠永遠保持內心的平靜和平衡。"
];

// 獲取網頁元素
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

// 函數：渲染選項按鈕
function renderOptions() {
    options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = optionText;
        
        // 核心邏輯：點擊按鈕後，將該按鈕的文字作為結果顯示
        button.addEventListener('click', () => {
            handleSelection(optionText);
        });
        
        optionsContainer.appendChild(button);
    });
}

// 函數：處理選項選擇
function handleSelection(selectedOption) {
    // 步驟 1: 隱藏選項區塊
    optionsContainer.style.display = 'none';

    // 步驟 2: 模擬分析過程（可以增加延遲來模仿專業感）
    resultText.textContent = '分析中... 請稍候片刻。';
    resultContainer.style.display = 'block';

    // 步驟 3: 在延遲後顯示「自證」結果
    setTimeout(() => {
        // 核心諷刺：結果就是選項本身！
        resultText.textContent = selectedOption; 
    }, 2000); // 延遲 2 秒，增加「運算」的儀式感
}

// 啟動測驗
renderOptions();