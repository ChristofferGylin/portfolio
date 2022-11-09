export const languagePercentages = async () => {

    const response = await fetch('https://api.github.com/repos/ChristofferGylin/memplusplus/languages');
    if (response.ok) {

        const gitHubData = await response.json();
        const keys = Object.keys(gitHubData);
        let total = 0;

        keys.forEach(key => {
            total += gitHubData[key];
        });

        keys.forEach(key => {
            console.log(key, Math.round((gitHubData[key] / total) * 100));
        });
    } else {
        console.log('HTTP Error', response.status)
    }

}