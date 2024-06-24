export function getContentGenerator(
    vernacularData: Array<{id: string; text: string}>,
) {
    return (id: string) => {
        const checkIds = vernacularData.map(item => item.id);
        if (!checkIds.includes(id)) {
            // console.log(`"${id}",`);
        }
        // console.log("ids>>>>>", checkIds)
        return vernacularData
            .filter(item => item.id === id)
            .map(item => item.text)[0];
    };
}
