with open("input.txt", "r") as input_file:
    grid = input_file.read().splitlines()   # list element = y axis, character in element = x axis (of a 2D grid)
max_lines = len(grid)
pattern_width = len(grid[0])
x = 0
tree_count = 0

for line in grid:
    if line[(x % pattern_width)] == "#":
        tree_count += 1
    x += 3

print("max_lines = " + str(max_lines))
print("grid[0] = " + str(max_lines))
print("Tree count = " + str(tree_count))