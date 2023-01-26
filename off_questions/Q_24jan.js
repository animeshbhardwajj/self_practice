// implement the following function:
// int BaanceFruite(int a, m rs);
// You have a basket full of apples and mangos, 
// your job is to make the numer of apples and given a function that accepts three integers 'a', 'm'
// and 'rs' as its argument where 'a' and a basket respectively and 'rs' is the rupees that you have.
// Implement the function to balance the basket.
// if'a'>'m', then buy (a-m) mangoes at the rate of Rs 1 per mango. If 'a'<'m', then sell (m-a) mangoes at
// the rate of Rs1 per mango. Return the total rupees left with you after balancing the fruits.
function balanceFruits(a, m, rs) {
    if(a > m) {
        let diff = a - m;
        rs = rs - diff;
    }
    else if(a < m) {
        let diff = m - a;
        rs = rs + diff;
    }
    return rs;
}
console.log(balanceFruits)


