export function formatTel(tel: string){
    tel = tel.replaceAll(/\D/g, "").replace(/7/g, "8");
    tel = `+${tel.slice(0, 1)} (${tel.slice(1, 4)}) ${tel.slice(4, 7)}-${tel.slice(7, 9)}-${tel.slice(9, 11)}`;
    let digits = tel.replace(/\D/g, "");

    return digits
}