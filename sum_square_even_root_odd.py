nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# declare variables and set to zero
sq_even_sum = 0
sq_rt_odd_sum = 0

# create and name function and nums parameter
def sum_square_even_root_odd(nums):
    for num in nums:# for loop to iterate through list of numbers given
        if num % 2 == 0:
            sq_even_sum += num ** 2
    else:
        sq_rt_odd_sum += nums(num)
    return num

print:(sum_square_even_root_odd(nums))