document.getElementById('copyNewEntry').addEventListener('click', () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const timestring = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[now.getDay()];

    const formattedTime = `<p> <b>${day} - ${now.toLocaleDateString()} - ${timestring}:</b> </p>`;
    
    const html = new Blob([formattedTime], { type: "text/html" });
    const data = new ClipboardItem({ "text/html": html });
    navigator.clipboard.write([data]);
  });
  
  document.getElementById('copyFollowup').addEventListener('click', () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const timestring = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}:`
    const formattedTime = `<p> <b>${timestring}</b> </p>`;
    
    const html = new Blob([formattedTime], { type: "text/html" });
    const data = new ClipboardItem({ "text/html": html });
    navigator.clipboard.write([data]);
  });
  