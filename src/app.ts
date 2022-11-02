const data: number[] = [1,2,3,4,5,6,7,8,9];

interface Settings {
    actualPageIdx: number,
    entriesOnPage: number
}
const dataSettings: Settings = { actualPageIdx: 1, entriesOnPage: 2 }; 

const paginateArray = (dataEntries: number[], datasettings: Settings): number[] => {

    const { actualPageIdx, entriesOnPage } = dataSettings
    const chunkSize: number = entriesOnPage;
    const arrNew: number[][] = [];
    
    for (let i = 0; i < dataEntries.length; i += chunkSize) {
        const chunk: number[] = dataEntries.slice(i, i + chunkSize);
		arrNew.push(chunk)
    }

	return arrNew[actualPageIdx] || undefined
};

console.log(paginateArray(data, dataSettings));