#!/bin/bash

printf "Please enter name of new component \nIn PascalCase\n"
read varname_pascal_case

varname_first=$varname_pascal_case:0:1
varname_first_lower=$(echo $varname_pascal_case | tr '[:upper:]' '[:lower:]')
varname_snake_case=$(echo $varname_pascal_case | sed "s/./$varname_first_lower/1")

FOLDER="./src/components/$varname_pascal_case"

mkdir $FOLDER

cp ./src/templates/blankComponent/index.tsx $FOLDER/index.tsx
cp ./src/templates/blankComponent/Blank.stories.tsx $FOLDER/$varname_pascal_case.stories.tsx
cp ./src/templates/blankComponent/Blank.unit.test.tsx $FOLDER/$varname_pascal_case.unit.test.tsx;

sed -i "s/Blank/$varname_pascal_case/g" $FOLDER/index.tsx
sed -i "s/Blank/$varname_pascal_case/g" $FOLDER/$varname_pascal_case.stories.tsx
sed -i "s/Blank/$varname_pascal_case/g"  $FOLDER/$varname_pascal_case.unit.test.tsx
sed -i "s/blank/$varname_snake_case/g"  $FOLDER/$varname_pascal_case.unit.test.tsx