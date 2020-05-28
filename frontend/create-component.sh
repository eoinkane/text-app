#!/bin/bash

PS3='Please enter what want to create: '
options=("component" "context" "Quit" )
select opt in "${options[@]}"
do
    case $opt in
        "component")
            choice_plural=$opt"s"
            choice_snake_case=$opt
            choice_pascal_case="Component"
            break
            ;;
        "context")
            choice_plural=$opt"s"
            choice_snake_case=$opt
            choice_pascal_case="Context"
            break
            ;;
        "Quit")
            exit 1
            ;;
        *) echo "invalid option $REPLY";;
    esac
done

printf "Please enter name of new $choice_plural \nIn PascalCase\n"
read varname_pascal_case

varname_first=$varname_pascal_case:0:1
varname_first_lower=$(echo $varname_pascal_case | tr '[:upper:]' '[:lower:]')
varname_snake_case=$(echo $varname_pascal_case | sed "s/./$varname_first_lower/1")

folder="./src/$choice_snake_case/$varname_pascal_case"

mkdir $folder

cp ./src/templates/blank$choice_pascal_case/index.tsx $folder/index.tsx
sed -i "s/Blank/$varname_pascal_case/g" $FOLDER/index.tsx

if [ $choice_snake_case = "component"]
then
    cp ./src/templates/blank$choice_pascal_case/Blank.stories.tsx $folder/$varname_pascal_case.stories.tsx
    sed -i "s/Blank/$varname_pascal_case/g" $folder/$varname_pascal_case.stories.tsx

    cp ./src/templates/blank$choice_pascal_case/Blank.unit.test.tsx $folder/$varname_pascal_case.unit.test.tsx;
    sed -i "s/Blank/$varname_pascal_case/g"  $folder/$varname_pascal_case.unit.test.tsx
    sed -i "s/blank/$varname_snake_case/g"  $folder/$varname_pascal_case.unit.test.tsx
fi