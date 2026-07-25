/* 
  技能儀表板 — 資料檔（通常只需要編輯這裡）
  - profile.name：填入你的姓名
  - profile.lang：填入你的主力語言
  - done: false → true：學會後把技能點亮
  - W2 之後：把講師發的整包物件貼到對應週次（替換整個 { ... }）

  改完存檔後重新整理瀏覽器，就會看到變化；如果畫面壞掉，先檢查逗號、引號、括號有沒有少。
*/

window.DASHBOARD_DATA = {
  profile: {
    name: "阿劍",
    lang: "JavaScript",
  },
  sections: [
    {
      id: "onboarding",
      kind: "intro",
      module: "ONBOARDING",
      title: "課程起點",
      groups: [
        {
          title: "為什麼學這些？",
          points: [
            {
              text: "為什麼是 Git？",
              desc: "版本控制是整個自動化流程的起點，所以課程從它開始。",
              done: true,
            },
            {
              text: "為什麼不學 AI 就好？",
              desc: "AI 的產出你要能驗收、能退回，因此還是要學習基本功。",
              done: true,
            },
            {
              text: "為什麼不直接實作？",
              desc: "CI/CD 是一條多節點的流程，先補齊知識點才接得起來。",
              done: true,
            },
          ],
        },
        {
          title: "課程會做出什麼？",
          points: [
            {
              text: "技能儀表板",
              desc: "前三週的個人作品，也是你追蹤學習進度的文件。",
              done: true,
            },
            {
              text: "CI/CD 部署通知系統",
              desc: "後三週的團隊產物，push 後就自動測試、部署與通知。",
              done: true,
            },
          ],
        },
        {
          title: "跟原課綱的差異？",
          points: [
            {
              text: "LINE Notify → Messaging API",
              desc: "LINE Notify 已終止服務，改用官方替代方案。",
              done: true,
            },
            {
              text: "Gemini CLI → Antigravity CLI",
              desc: "Antigravity 是官方宣布的繼任工具。",
              done: true,
            },
            {
              text: "內容重排、總數不減",
              desc: "課綱列出的項目都會涵蓋，並整理成更適合這門課的學習安排。",
              done: true,
            },
            {
              text: "技術範圍聚焦",
              desc: "以 Node.js 與 Python 為示範載體，其餘語言提供對照範例。",
              done: true,
            },
          ],
        },
        {
          title: "一天的節奏？",
          points: [
            {
              text: "50 分上課／10 分休息",
              desc: "一天七堂的節奏，中午休息一小時。",
              done: true,
            },
            {
              text: "每天 Git＋GitHub＋AI",
              desc: "每個上課日都有這三條線，最後一堂固定是 AI 時間。",
              done: true,
            },
          ],
        },
        {
          title: "課堂資源？",
          points: [
            {
              text: "簡報網址逐週解鎖",
              desc: "每週上課日早上自動開放當週簡報。",
              done: true,
            },
            {
              text: "程式碼模板",
              desc: "模板發放與課堂提問都在同一個 repo。",
              done: true,
            },
            {
              text: "Agent Skills",
              desc: "每週的 AI skills 隨教材發放，逐週迭代。",
              done: true,
            },
          ],
        },
        {
          title: "遇到問題？",
          points: [
            {
              text: "使用 GitHub Issue",
              desc: "遇到操作或觀念問題，統一開 GitHub Issue 發問，並把背景說清楚。",
              done: true,
            },
          ],
        },
      ],
    },
    {
      id: "week-1",
      kind: "week",
      week: 1,
      module: "ORIGIN",
      title: "從零開始，把作品上線",
      groups: [
        {
          no: "01",
          title: "課程導覽",
          note: "第一堂課收錄在「序章」的分頁。",
        },
        {
          no: "02",
          title: "Git 入門與環境",
          points: [
            {
              text: "版本控制概念",
              desc: "管理檔案如何隨時間改變，把保存、比較與回復交給系統處理。",
              done: true,
            },
            {
              text: "Git 的誕生",
              desc: "Linux 之父 Linus 為了管理大型多人專案，在 2005 年寫出 Git。",
              done: false,
              bonus: true,
            },
            {
              text: "集中式 vs 分散式",
              desc: "每個人本機都有完整歷史，離線照常記錄，遠端則用來同步。",
              done: false,
              bonus: true,
            },
            {
              text: "安裝 Git",
              desc: "到 Git 官方下載頁選擇作業系統，根據對應的方式安裝。",
              done: true,
            },
            {
              text: "git --version",
              desc: "確認 Git 是否安裝成功；看到版本號就代表可用。",
              done: true,
            },
            {
              text: "終端機選擇",
              desc: "macOS 可用 Terminal 或 iTerm2；Windows 建議使用 Windows Terminal。",
              done: true,
            },
            {
              text: "Set-ExecutionPolicy RemoteSigned",
              desc: "Windows 先允許本機指令碼執行，之後 CLI 工具才比較不會被擋下。",
              done: true,
            },
            {
              text: "ExecutionPolicy 原理",
              desc: "RemoteSigned 允許本機指令碼，從網路下載的指令碼仍需要可信任簽章。",
              done: true,
            },
            {
              text: "git 安裝排雷",
              desc: "輸入 git 找不到指令時，先重開終端機，再檢查安裝與 PATH。",
              done: false,
              bonus: true,
            },
            {
              text: "安裝排雷",
              desc: "裝不起來時，先從系統環境、權限設定與終端機是否重開排查。",
              done: false,
              bonus: true,
            },
            {
              text: "pwd",
              desc: "顯示終端機目前所在的資料夾，先確認自己站在哪裡。",
              done: true,
            },
            {
              text: "ls",
              desc: "列出目前資料夾裡的檔案與資料夾，確認裡面有哪些內容。",
              done: true,
            },
            {
              text: "cd",
              desc: "切換到指定資料夾；之後操作 Git 前，先進到正確專案位置。",
              done: true,
            },
            {
              text: "mkdir",
              desc: "在目前位置建立新資料夾，先把練習專案獨立出來。",
              done: true,
            },
            {
              text: "PATH 概念",
              desc: "系統會沿著 PATH 記錄的位置尋找程式，找得到指令才能執行。",
              done: true,
            },
            {
              text: "拖曳資料夾到 cd 路徑",
              desc: "先輸入 cd 和空格，再把資料夾拖進終端機，路徑就會自動貼上。",
              done: false,
              bonus: true,
            },
            {
              text: "open／explorer",
              desc: "用 Finder 或檔案總管打開目前資料夾；「.」代表現在所在的位置。",
              done: false,
              bonus: true,
            },
            {
              text: "touch",
              desc: "建立一個沒有內容的新檔案；檔案已存在時不會清空內容。",
              done: false,
              bonus: true,
            },
            {
              text: "cp",
              desc: "cp 後面接來源與目的地，就能複製一份檔案。",
              done: false,
              bonus: true,
            },
            {
              text: "mv",
              desc: "mv 可以移動位置，也可以留在同一層重新命名。",
              done: false,
              bonus: true,
            },
            {
              text: "cat",
              desc: "把檔案內容直接印在終端機上，快速確認文字檔內容。",
              done: false,
              bonus: true,
            },
            {
              text: "rm",
              desc: "刪除檔案不會進資源回收桶，執行前先確認目標。",
              done: false,
              bonus: true,
            },
            {
              text: "VS Code 開啟資料夾",
              desc: "用「開啟資料夾」選擇專案，之後以資料夾為單位工作。",
              done: true,
            },
            {
              text: "code 指令入 PATH",
              desc: "把 code 命令加入 PATH，之後輸入 code . 就能開啟目前資料夾。",
              done: false,
              bonus: true,
            },
            {
              text: "VS Code 整合終端機",
              desc: "在 VS Code 底部開啟終端機，編輯器與指令操作留在同一個視窗。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "03",
          title: "Git 身分與首個 commit",
          points: [
            {
              text: "git config",
              desc: "開始記錄歷史之前，先設定名字與 email，讓 commit 有正確作者署名。",
              done: true,
            },
            {
              text: "--global 差別",
              desc: "--global 代表這台電腦之後的 Git 專案，都會套用同一組署名。",
              done: true,
            },
            {
              text: ".gitconfig 位置",
              desc: "git config 背後是在寫純文字設定檔，之後設定跑掉時就知道從哪裡查。",
              done: false,
              bonus: true,
            },
            {
              text: "專案級 name/email 覆寫",
              desc: "不加 --global 只影響目前專案，工作與個人專案就能使用不同身分。",
              done: false,
              bonus: true,
            },
            {
              text: "git init",
              desc: "讓 Git 接手記錄這個資料夾的版本，建立新的儲存庫。",
              done: true,
            },
            {
              text: "認識 .git",
              desc: ".git 是版本紀錄存放的位置，也是 Git 的核心資料夾。",
              done: true,
            },
            {
              text: "git status",
              desc: "新增或修改檔案後，先問 Git 目前看到什麼狀態。",
              done: true,
            },
            {
              text: "init 錯了重來",
              desc: "如果在錯的資料夾 init，移除那裡的 .git，就會回到沒有版本控制的狀態。",
              done: false,
              bonus: true,
            },
            {
              text: "圖形介面顯示隱藏檔",
              desc: ".git 是隱藏資料夾；看不到不代表 init 失敗，先確認工具是否顯示隱藏檔。",
              done: false,
              bonus: true,
            },
            {
              text: "三層架構",
              desc: "先修改，再挑選，最後保存；這就是工作目錄、暫存區、儲存庫的順序。",
              done: true,
            },
            {
              text: "git add",
              desc: "把這次想提交的變更放進暫存區，等待下一步 commit。",
              done: true,
            },
            {
              text: "git commit",
              desc: "把暫存區的內容保存成一個 commit，並附上訊息。",
              done: true,
            },
            {
              text: "commit message",
              desc: "一句話說清楚這個 commit 改了什麼，之後回頭看才找得到脈絡。",
              done: true,
            },
            {
              text: "日常循環",
              desc: "改完先 status 看狀態，再決定 add 什麼，最後 commit 保存版本。",
              done: true,
            },
            {
              text: "git add . vs 指定檔案",
              desc: "git add . 會一口氣加入所有變更；不確定加了什麼，就先用 status 看清楚。",
              done: false,
              bonus: true,
            },
            {
              text: "git commit --amend",
              desc: "還沒 push 前，可以用 amend 修正最後一個 commit 的訊息或內容。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "04",
          title: "Git 暫存、歷史與忽略",
          points: [
            {
              text: "部分提交",
              desc: "用暫存區逐檔挑選變更，把不同目的拆成各自清楚的 commit。",
              done: true,
            },
            {
              text: "git restore --staged",
              desc: "把檔案移出暫存區；取消暫存，不刪檔案、不改內容。",
              done: true,
            },
            {
              text: "add 後又改檔",
              desc: "git add 收下的是檔案當下的版本；後面又改，就要再 add 一次。",
              done: false,
              bonus: true,
            },
            {
              text: "git log",
              desc: "查看提交紀錄；完整資訊詳細，平常會搭配 --oneline 快速瀏覽。",
              done: true,
            },
            {
              text: "git diff",
              desc: "查看工作目錄裡還沒 add 的改動，分清楚原本內容與現在內容。",
              done: true,
            },
            {
              text: "git log -n",
              desc: "歷史很多時，可以先限制只看最近幾個 commit。",
              done: false,
              bonus: true,
            },
            {
              text: "git log -p",
              desc: "每個 commit 後面接著顯示當時的逐行改動，把時間軸和內容一起看。",
              done: false,
              bonus: true,
            },
            {
              text: "git diff --staged",
              desc: "已經 add 的內容，要加上 --staged 才看得到。",
              done: false,
              bonus: true,
            },
            {
              text: ".gitignore",
              desc: "把祕密、本機設定、可重建的檔案先放進忽略清單。",
              done: true,
            },
            {
              text: "git rm --cached 不回溯",
              desc: "已追蹤的檔案要先取消追蹤，.gitignore 才接得上。",
              done: false,
              bonus: true,
            },
            {
              text: ".gitignore 官方範本",
              desc: "從 GitHub 官方範本起手，再依專案微調，通常比自己硬背規則可靠。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "05",
          title: "GitHub 介紹與設定",
          points: [
            {
              text: "Git vs GitHub",
              desc: "Git 是裝在電腦上的版本控制工具，GitHub 是放遠端儲存庫的平台。",
              done: true,
            },
            {
              text: "remote 概念",
              desc: "本地儲存庫放在電腦上；遠端儲存庫放在 GitHub 上，也有自己的網址。",
              done: true,
            },
            {
              text: "GitHub 帳號",
              desc: "註冊帳號後，作品、儲存庫列表和協作紀錄都會出現在這裡。",
              done: true,
            },
            {
              text: "public vs private",
              desc: "public 任何人都能看到程式碼；private 只有你和受邀的人看得到。",
              done: true,
            },
            {
              text: "GitLab",
              desc: "GitLab、Bitbucket 也提供類似功能；Git 指令與 remote 概念仍然通用。",
              done: false,
              bonus: true,
            },
            {
              text: "repo 頁面導覽",
              desc: "Code 看檔案，Issues 記錄問題與待辦，Actions 放自動化流程，Settings 管理設定。",
              done: false,
              bonus: true,
            },
            {
              text: "PAT",
              desc: "PAT 是給終端機使用的通行證，用 token 取代 GitHub 帳號密碼。",
              done: true,
            },
            {
              text: "為何不用帳密？",
              desc: "通行證可以限制權限、設定到期日，也能在外洩時撤銷重發。",
              done: false,
              bonus: true,
            },
            {
              text: "最小權限原則",
              desc: "只勾這次真正需要的權限，到期日不要設太長，降低外洩影響。",
              done: false,
              bonus: true,
            },
            {
              text: "git remote add origin",
              desc: "把本地儲存庫接到 GitHub 儲存庫；origin 是之後代替網址的小名。",
              done: true,
            },
            {
              text: "git branch -M",
              desc: "把目前分支重新命名成 main，對齊 GitHub 常用的主線名稱。",
              done: true,
            },
            {
              text: "master → main",
              desc: "main 是近年更常見的預設主分支名稱，也常是部署與協作對齊的位置。",
              done: true,
            },
            {
              text: "git push",
              desc: "把 main 推到遠端，讓 GitHub 上也有同一個 commit。",
              done: true,
            },
            {
              text: "git clone",
              desc: "clone 會自動建立資料夾，裡面包含完整 Git 歷史，也會設定 origin。",
              done: true,
            },
            {
              text: "為何要求 main？",
              desc: "先把主分支名稱對齊 GitHub 慣例，之後推送與部署會少一步調整。",
              done: false,
              bonus: true,
            },
            {
              text: "init.defaultBranch 設為 main",
              desc: "設定後，新儲存庫一開始就會使用 main，不用每次手動改名。",
              done: false,
              bonus: true,
            },
            {
              text: "GitHub Pages",
              desc: "GitHub Pages 會把儲存庫裡的 index.html 發佈成公開網頁。",
              done: true,
            },
            {
              text: "部署非即時",
              desc: "按下 Save 或 push 後，GitHub 會先跑一輪部署流程，網站通常不會立刻出現。",
              done: false,
              bonus: true,
            },
            {
              text: "Pages 網址規則",
              desc: "一般專案網址會帶 repo 名稱；個人首頁儲存庫則直接使用帳號網址。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "06",
          title: "GitHub Pages 部署頁面",
          points: [
            {
              text: "部署「技能儀表板」頁面",
              desc: "完成情境挑戰：任何人都能透過公開網址瀏覽你的技能儀表板。",
              done: true,
            },
            {
              text: "Pages 沒出現？",
              desc: "先檢查分支、路徑與部署狀態，通常就能找到 Pages 沒畫面的原因。",
              done: false,
              bonus: true,
            },
            {
              text: "data.js 資料格式排錯",
              desc: "畫面空白或跳出錯誤時，先檢查逗號、引號和括號有沒有收好。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "07",
          title: "AI 開發助理",
          points: [
            {
              text: "AI 基本概念",
              desc: "AI 適合當開發助理，幫你查資料、解釋狀況、先寫草稿。",
              done: true,
            },
            {
              text: "Antigravity CLI",
              desc: "跑在終端機裡，能在專案脈絡中回答與協助處理工作。",
              done: true,
            },
            {
              text: "Antigravity 繼任 Gemini CLI",
              desc: "它是 Google Gemini CLI 的官方繼任者，課程以它作為終端機 AI 工具。",
              done: false,
              bonus: true,
            },
            {
              text: "Agent Skills 概念",
              desc: "Skills 就是一份工作說明書，讓 AI 遇到同類任務時照規則工作。",
              done: true,
            },
            {
              text: "SKILL.md 格式",
              desc: "一份 skill 會寫清楚名稱、何時載入、規則與正確示範。",
              done: true,
            },
            {
              text: "create-commit",
              desc: "先安裝 create-commit，再請 AI 依照這次暫存的改動撰寫 commit 草稿。",
              done: true,
            },
            {
              text: "Context 觀念",
              desc: "載入 skill 會把規則放進這次對話脈絡；載入越多，留給任務的空間越少。",
              done: true,
            },
            {
              text: "skill 作用層級",
              desc: "放在 User Global 對所有專案生效；放進專案內的 .agents/skills，只對這個專案生效。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "08",
          milestone: true,
          title: "部署「技能儀表板」頁面",
          desc: "完成後，別人也能透過公開網址瀏覽你的技能儀表板。",
        },
      ],
    },
    {
      id: "week-2",
      week: 2,
    },
    {
      id: "week-3",
      week: 3,
    },
    {
      id: "week-4",
      week: 4,
    },
    {
      id: "week-5",
      week: 5,
    },
    {
      id: "week-6",
      week: 6,
    },
  ],
};
