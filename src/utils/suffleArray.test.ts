import { Shuffle } from ".";

describe('Shuffle',()=> {
    it('check lenght of array after shuffle',()=>{
        const a = [1,2,3]
        Shuffle(a)
        expect(a).toHaveLength(3)

    })
    it('check if array contains same values',()=>{
        const a = [1,2,3]
        Shuffle(a)
        expect(a).toContain(1)
        expect(a).toContain(2)
        expect(a).toContain(3)
        console.log('example shuffle', a)
    })

})