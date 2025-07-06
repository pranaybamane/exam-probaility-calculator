import random

def generate_marks(num_students):
    """
    Generates random marks for a given number of students.
    
    Args:
        num_students (int): The number of students.
    
    Returns:
        list: A list of random marks.
    """
    marks = []
    for _ in range(num_students):
        mark = random.randint(0, 100)
        marks.append(mark)
    return marks

num_students = 10
marks = generate_marks(num_students)

print("Random Marks:")
for i, mark in enumerate(marks):
    print(f"Student {i+1}: {mark}")
