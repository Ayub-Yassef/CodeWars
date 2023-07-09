import math

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

sum_of_squares_even = 0
sum_of_square_root_odd = 0

for num in numbers:
    if num % 2 == 0:
        sum_of_squares_even += num ** 2
    else:
        sum_of_square_root_odd += math.sqrt(num)

print("Sum of squares of even numbers:", sum_of_squares_even)
print("Sum of square roots of odd numbers:", sum_of_square_root_odd)
