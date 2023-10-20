function countdownNumbersRound(target, numbers) {
    function evaluateExpression(expression) {
        try {
            return eval(expression);
        } catch (error) {
            return NaN;
        }
    }

    function solve(numbers, currentExpression) {
        if (numbers.length === 1) {
            if (Math.abs(numbers[0] - target) < 0.0001) {
                return [currentExpression + numbers[0]];
            } else {
                return [];
            }
        }

        const solutions = [];
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                const a = numbers[i];
                const b = numbers[j];
                const rest = numbers.filter((_, index) => index !== i && index !== j);

                if (b !== 0) {
                    solutions.push(
                        ...solve([...rest, a + b], `(${currentExpression} + ${a} + ${b})`)
                    );
                    solutions.push(
                        ...solve([...rest, a - b], `(${currentExpression} + ${a} - ${b})`)
                    );
                    solutions.push(
                        ...solve([...rest, a * b], `(${currentExpression} + ${a} * ${b})`)
                    );
                    solutions.push(
                        ...solve([...rest, a / b], `(${currentExpression} + ${a} / ${b})`)
                    );
                }

                if (a !== 0) {
                    solutions.push(
                        ...solve([...rest, b - a], `(${currentExpression} + ${b} - ${a})`)
                    );

                    if (b !== 0) {
                        solutions.push(
                            ...solve([...rest, b / a], `(${currentExpression} + ${b} / ${a})`)
                        );
                    }
                }
            }
        }

        return solutions;
    }

    const solutions = solve(numbers, "");
    const uniqueSolutions = Array.from(new Set(solutions));
    return uniqueSolutions.map((solution) => ({
        expression: solution,
        result: evaluateExpression(solution),
    }));
}

// Example usage:
const targetNumber = 537;
const availableNumbers = [25, 50, 75, 100, 3, 6];
const solutions = countdownNumbersRound(targetNumber, availableNumbers);

console.log("Solutions for the Numbers Round:");
solutions.forEach((solution, index) => {
    if (!isNaN(solution.result) && Math.abs(solution.result - targetNumber) < 0.0001) {
        console.log(`${index + 1}: ${solution.expression} = ${solution.result}`);
    }
});
