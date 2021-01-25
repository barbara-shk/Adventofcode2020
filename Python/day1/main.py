with open('input.txt','r') as f:
    #.rstrip removes white spaces at the end
    #int() returns an integer object from any number or string
    numbers = [int(line.rstrip()) for line in f]
    print(numbers)

# Part 1
for number in numbers:
    SumList = [number + x for x in numbers]
    index = numbers.index(number)
    # print(SumList)
    if 2020 in SumList:
        y = SumList.index(2020)
        print("Part 1 : Les deux chiffres qui donnent une somme de 2020 : " + str(numbers[index]) + " et " + str(numbers[y]))
        print("Part 1 : Produit : " + str(int(numbers[index] * numbers[y])))
        break


# Part 2
numbersList = []
for number in numbers:
    SumList2 = [[number + x + y for x in numbers] for y in numbers]
    index1 = numbers.index(number)
    LocateList = [2020 in lst for lst in SumList2]
    if True in LocateList:
        index2 = LocateList.index(True)
        index3 = LocateList.index(True, index2+1)
        break

print("Part 2 : trois chiffres : " + str(numbers[index1]) + ", " + str(numbers[index2]) + " and " + str(numbers[index3]))
print("Part 2 : produit des trois " + str(numbers[index1]*numbers[index2]*numbers[index3]))