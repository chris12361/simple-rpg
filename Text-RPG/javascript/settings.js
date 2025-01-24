function toggleDarkMode() {
    // Get the current theme from localStorage (if any)
    const darkModePreference = localStorage.getItem('darkMode');

    // If the dark mode preference is enabled, disable it, else enable it
    if (darkModePreference === 'enabled') {
        // Apply light mode
        document.documentElement.style.setProperty('--color1', '#064663');
        document.documentElement.style.setProperty('--color2', '#072c4e');
        document.documentElement.style.setProperty('--color3', '#041b30');
        document.documentElement.style.setProperty('--color4', '#ECB365');
        
        // Save the updated preference to localStorage
        localStorage.setItem('darkMode', 'disabled');
    } else {
        // Apply dark mode
        document.documentElement.style.setProperty('--color1', '#5e5e5e');
        document.documentElement.style.setProperty('--color2', '#4b4b4b');
        document.documentElement.style.setProperty('--color3', '#2c2c2c');
        document.documentElement.style.setProperty('--color4', '#ffffff');
        
        // Save the updated preference to localStorage
        localStorage.setItem('darkMode', 'enabled');
    }
}

// On page load, check localStorage to apply the theme
window.onload = function() {
    const darkModePreference = localStorage.getItem('darkMode');
    
    if (darkModePreference === 'enabled') {
        // Apply dark mode if enabled
        document.documentElement.style.setProperty('--color1', '#5e5e5e');
        document.documentElement.style.setProperty('--color2', '#4b4b4b');
        document.documentElement.style.setProperty('--color3', '#2c2c2c');
        document.documentElement.style.setProperty('--color4', '#ffffff');
    } else {
        // Apply light mode if not enabled or if no preference is saved
        document.documentElement.style.setProperty('--color1', '#064663');
        document.documentElement.style.setProperty('--color2', '#072c4e');
        document.documentElement.style.setProperty('--color3', '#041b30');
        document.documentElement.style.setProperty('--color4', '#ECB365');
    }
}
