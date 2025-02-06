   
export function trimArray<T>(array:T[], maxLength:number) {
    if (array.length  > maxLength) {
        return array.slice(0, maxLength)
    }
    return array
}

export function getTimeDifference(dateString1:string, dateString2:string) {
    const date1 = new Date(dateString1)
    const date2 = new Date(dateString2)
    let Difference_In_Time =date2.getTime() - date1.getTime();

    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

    return Difference_In_Days
}