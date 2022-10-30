const data: number[] = [1,2,3,4,5,6,7,8,9];
const settings: { actualPageIdx: number;
                entriesOnPage: number }  = { actualPageIdx: 1, entriesOnPage: 2 }; 

const paginateArray = (dataEntries, settings) => {

    const chunkSize: number = settings.entriesOnPage;
    const arrNew: number[] = [];
    
    for (let i = 0; i < dataEntries.length; i += chunkSize) {
        const chunk: number = dataEntries.slice(i, i + chunkSize);
		arrNew.push(chunk)
    }

	return arrNew[settings.actualPageIdx]

};

console.log(paginateArray(data, settings));