function minimumDistances(a) {
    let count = [];
    for(let i = 0; i < a.length; i++){
        for(let j = i + 1; j < a.length; j++){
            if(a[i] === a[j]){
                count.push(j - i);
            }
        }
    }
    if(count.length !== 0){
        count = count.sort()
        return count[0] 
    } else {
        return -1
    }
    
}

console.log(minimumDistances([92020, 81760 ,74143 ,79550 ,78365 ,22559, 31539 ,75299 ,73160 ,16955, 83706, 88462, 89329, 61786, 82989, 75867, 18047, 70648, 27171, 3369, 12625 ,22975 ,42538 ,96532, 55973 ,25025, 18515, 66395, 7724, 93487, 27618, 99745, 75247 ,18113 ,95647, 53612 ,57024, 27186, 45263 ,46537, 60493, 45321, 34999 ,66174 ,7108, 17988 ,58394, 41507 ,4988, 1917, 61228 ,17613, 24892, 20118, 30497, 97218, 45144,49013 ,63613 ,69220 ,42500, 7583, 68965 ,17748 ,42049,64613 ,87712 ,99073, 8151, 32976, 45610 ,84997, 78297, 96961 ,51171, 1757 ,14949, 9565, 59616 ,19937 ,11483 ,20844 ,53903, 52727 ,40963, 84400, 49945 ,2459, 49765, 29910, 88031 ,92266 ,37494, 56997, 26366 ,95895 ,37962 ,14078, 94968, 62465, 63406 ,56931, 63814 ,58056, 53892, 31338, 59813 ,85194, 57255, 35782, 21483, 85090, 56626, 75386, 37818, 13941 ,76139, 4115, 32752 ,25904, 34026 ,20784 ,34522, 87872, 94133, 60888, 83767 ,48447, 74967, 95087, 27264, 54725 ,68370, 91079 ,12781 ,22263, 22417, 88947, 23809, 79672 ,24729, 45292, 64763 ,81355 ,37031 ,18933 ,11649 ,29522 ,23048, 44401 ,55426 ,73426 ,81537, 6301, 77650 ,75670 ,67189 ,77769, 40469, 72857, 67734, 13234 ,41227 ,58813 ,26015 ,79842 ,97582 ,31314, 3651, 93606, 56043]))