with open('input.txt', 'r') as fd:
    lines = [line.rstrip().replace(":"," ").split() for line in fd]
    #format input => ['15-16', 'm', 'mhmjmzrmmlmmmmmm'] => 'min-max occurence','lettre','mdp'


#compter les mdp valides
validPasswords = 0

#créer une boucle à partir de l'input qui vérifiera chaque ligne
for line in lines: 
    #condition pour que le mdp soit valide : si 'lettre' a entre 'min-max occurence' dans mdp alors ++
    occurence = line[0] #occurence est le premier élément de l'array line
    min = occurence.split("-")[0] #min est le premier élément de l'occurence
    max = occurence.split("-")[1] #max est le deuxieme élément de l'occurence
    char = line[1] #la lettre est le deuxieme élément de l'array line
    passwords = line[2] #la lettre est le deuxieme élément de l'array line
    if int(min) <= passwords.count(char) <= int(max):
        validPasswords += 1

print(validPasswords)

"""     for password in passwords: 
        if int(min) <= password.count(char) <= int(max):
            validPasswords += 1

print(validPasswords)
"""