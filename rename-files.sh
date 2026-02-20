OLD=$1
NEW=$2
DIR=${3:-.}

if [ -z "$OLD" ] || [ -z "$NEW" ]; then
  echo "Usage: ./rename-files.sh OldWord NewWord [directory]"
  exit 1
fi

cd "$DIR" || exit 1

for file in *"$OLD"*; do
  if [ -f "$file" ]; then
    newname="${file//$OLD/$NEW}"
    mv "$file" "$newname"
    echo "Renamed: $file → $newname"
  fi
done

echo "Replacing content inside files..."
grep -rl "$OLD" . | xargs sed -i '' "s/$OLD/$NEW/g"
echo "Done!"