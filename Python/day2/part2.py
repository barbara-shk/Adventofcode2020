with open('input.txt', 'r') as fd:
    lines = [line.rstrip().replace(":"," ").split() for line in fd]
    #format input => ['15-16', 'm', 'mhmjmzrmmlmmmmmm'] => 'min-max occurence','lettre','mdp'


#compter les mdp valides
validPasswords = 0

#créer une boucle à partir de l'input qui vérifiera chaque ligne
for line in lines: 
    #condition pour que le mdp soit valide : si 'lettre' a entre 'min-max occurence' dans mdp alors ++
    occurence = line[0] #occurence est le premier élément de l'array line
    firstPos = int(occurence.split("-")[0])-1 #firstPos est la première position possible
    secPos = int(occurence.split("-")[1])-1 #secPos est la deuxieme position possible
    char = line[1] #la lettre est le deuxieme élément de l'array line, lettre condition
    passwords = line[2] #passwords est le 3e element de l'array line
    #il faut boucler dans chaque password pour vérifier s'il y a un match char et index
    
    if (char == passwords[firstPos] and char != passwords[secPos]) or (char == passwords[secPos] and char != passwords[firstPos]):
        validPasswords += 1

print(validPasswords)
