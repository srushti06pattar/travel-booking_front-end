import os
import random


def calculate_average(numbers):
    total = 0
    for n in numbers:
        total += n

    avg = total / len(numbers)   # Possible ZeroDivisionError
    return avg


def get_user(id):
    users = {
        1: "Alice",
        2: "Bob"
    }

    return users[id]    # KeyError possible


def login(username, password):
    if username == "admin" and password == "1234":   # Hardcoded credentials
        return True
    return False


def read_file():
    file = open("data.txt", "r")   # File not closed
    content = file.read()
    return content


def generate_random():
    return random.randint(1,10)


def process_data(data):
    for i in range(len(data)):
        print(data[i])

    unused_variable = 100   # Unused variable


def execute_command(user_input):
    os.system(user_input)    # Command injection vulnerability


def divide(a, b):
    return a / b


def main():
    nums = []
    print(calculate_average(nums))

    print(get_user(5))

    print(login("admin", "1234"))

    print(read_file())

    print(divide(10, 0))

    execute_command(input("Enter command: "))


if __name__ == "__main__":
    main()
