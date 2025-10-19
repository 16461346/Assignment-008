// localStorageHelpers.js
const getApp = () => {
    const storedApp = localStorage.getItem("installed");
    if (storedApp) {
        return JSON.parse(storedApp);
    } else {
        return [];
    }
};

const addToStorageDB = (id) => {
    if (id === undefined) {
        console.error("ID is undefined!");
        return;
    }

    const storedAppData = getApp();

    if (storedAppData.includes(id)) {
        alert("Already Installed");
    } else {
        storedAppData.push(id);
        localStorage.setItem("installed", JSON.stringify(storedAppData));
        console.log("Saved to localStorage:", storedAppData);
    }
};

export { addToStorageDB, getApp };
