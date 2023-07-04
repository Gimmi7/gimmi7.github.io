tree_branch="gh-page"
work_path="/tmp/$tree_branch"

# build
yarn run build

# create or clear the worktree
if [! -d "$work_path" ];then
  mkdir $work_path && echo "create dir $work_path"
else
  rm -rf "$work_path/*" && echo "remove file in $work_path"
fi

# delete old tree_branch
git branch -D $tree_branch

# add worktree
git worktree add -f $work_path

# copy dist to worktree
cp -rp dist/* $work_path
cd $work_path
git add -A
git commit -m "deploy github page"
git push -f origin $tree_branch

# remove worktree
git worktree remove -f $work_path