/**
 * Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, 
 * the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
 #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```
 */

function longest(s1, s2) {
    let arr = Array.from(new Set([...s1,...s2]));
    arr.sort((a,b)=>{
        return a.charCodeAt() - b.charCodeAt();
    })
    return arr.join('');
}
// longest('xyaabbbccccdefww','xxxxyyyyabklmopq');

/**
 * Trolls are attacking your comment section!(删除元音)

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
 */

function disemvowel(str) {

    str = str.replace(/[a|e|i|o|u]/ig,'')
    console.log(str);
    return str;
  }
//   disemvowel("This website is for losers LOL!")

  /**
   * In this little assignment you are given a string of space separated numbers, 
   * and have to return the highest and lowest number.
   * highAndLow("1 2 3 4 5"); // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
   */

function highAndLow(numbers) {
    let num = numbers.split(' ').map(Number);
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
//   highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6');
highAndLow('42 42');