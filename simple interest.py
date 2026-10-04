def calculate_simple_interest(p, r, t):
    return (p * r * t) / 100

# Taking dynamic input from the user
principal = float(input("Enter principal amount: "))
rate = float(input("Enter annual interest rate (%): "))
time = float(input("Enter time in years: "))

# Calculation
interest = calculate_simple_interest(principal, rate, time)
total_amount = principal + interest

# Output the results
print(f"Simple Interest: {interest:.2f}")
print(f"Total Amount: {total_amount:.2f}")