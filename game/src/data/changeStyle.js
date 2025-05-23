//CSS
const style = document.createElement("style");
style.innerHTML = `
    :root {
      --bg: hsl(0, 3.60%, 11.00%);
      --gray1: #0a080a;
      --gray2: #110b11;
    }
    
    body {
      margin: 0;
      overflow: hidden;
      background: var(--bg);
      position: relative;
    }
    
    body::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:
        linear-gradient(45deg, var(--gray1) 25%, transparent 25%),
        linear-gradient(-45deg, var(--gray1) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, var(--gray1) 75%),
        linear-gradient(-45deg, transparent 75%, var(--gray1) 75%),
        rgba(0, 0, 0, 0.81);
      background-size: 15px 15px, 15px 15px, 15px 15px, 15px 15px, cover;
      background-position: 0 0, 0 7.5px, 7.5px -7.5px, -7.5px 0, center;
      background-blend-mode: multiply;
      backdrop-filter: blur(10px);
      z-index: -1;
    }
  `;
document.head.appendChild(style);