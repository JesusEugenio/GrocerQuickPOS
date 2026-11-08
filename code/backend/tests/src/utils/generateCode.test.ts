import { describe, it, expect } from "vitest";
import { generateSixDigitCode } from "../../../src/utils/generateCode.util.ts";

describe('generate code test', ()=>{
    
    it('should generate a code with 6 digits', ()=>{
        // Verify that the generated string matches the 6-digit regex pattern
        expect(generateSixDigitCode()).toMatch(/\d{6}/);
    });

    it('should generate positive integers', ()=>{
        // Convert the returned string into a base-10 integer
        const codeNumber = parseInt(generateSixDigitCode(), 10);
        expect(codeNumber).toBeGreaterThan(0);
    });

    it('should generate unique codes', ()=>{
        const code1 = generateSixDigitCode();
        const code2 = generateSixDigitCode();
        
        expect(code1 !== code2).toBe(true);
    });
});