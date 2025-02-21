// A new is my first journal entry on the day. It has more info than a followup.
document.getElementById('copyNewEntry').addEventListener('click', () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine if it is AM or PM
    const timestring = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[now.getDay()];

    const formattedTime = `<p> <b>${day} - ${now.toLocaleDateString()} - ${timestring}:</b> </p>`;
    //Slap it all in the clipboard
    const html = new Blob([formattedTime], { type: "text/html" });
    const data = new ClipboardItem({ "text/html": html });
    navigator.clipboard.write([data]);
  });
  
  // Formatting is slightly different for follow-up entries
  document.getElementById('copyFollowup').addEventListener('click', () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const timestring = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}:`
    const formattedTime = `<p> <b>${timestring}</b> </p>`;
    
    //Slap it all in the clipboard
    const html = new Blob([formattedTime], { type: "text/html" });
    const data = new ClipboardItem({ "text/html": html });
    navigator.clipboard.write([data]);
  });
  