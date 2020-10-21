# Exercise done:

```
Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise
$ git
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]
These are common Git commands used in various situations:
start a working area (see also: git help tutorial)
   clone             Clone a repository into a new directory
   init              Create an empty Git repository or reinitialize an existing one
work on the current change (see also: git help everyday)
   add               Add file contents to the index
   mv                Move or rename a file, a directory, or a symlink
   restore           Restore working tree files
   rm                Remove files from the working tree and from the index
   sparse-checkout   Initialize and modify the sparse-checkout

examine the history and state (see also: git help revisions)
   bisect            Use binary search to find the commit that introduced a bug
   diff              Show changes between commits, commit and working tree, etc
   grep              Print lines matching a pattern
   log               Show commit logs
   show              Show various types of objects
   status            Show the working tree status

grow, mark and tweak your common history
   branch            List, create, or delete branches
   commit            Record changes to the repository
   merge             Join two or more development histories together
   rebase            Reapply commits on top of another base tip
   reset             Reset current HEAD to the specified state
   switch            Switch branches
   tag               Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch             Download objects and refs from another repository
   pull              Fetch from and integrate with another repository or a local branch
   push              Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise
$ ls -a
.  ..  .idea

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise
$ git init
Initialized empty Git repository in C:/Users/Eric Keränen/Desktop/AMK/Web-sovelluskehitys/Git-exercise/.git/

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ ls -a
.  ..  .git  .idea

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ touch README.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ ls -l
total 0
-rw-r--r-- 1 Eric Keränen 197121 0 Oct 20 11:38 README.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .idea/
        README.md

nothing added to commit but untracked files present (use "git add" to track)

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git add .idea/ README.md
warning: LF will be replaced by CRLF in .idea/workspace.xml.
The file will have its original line endings in your working directory

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   .idea/Git-exercise.iml
        new file:   .idea/codeStyles/codeStyleConfig.xml
        new file:   .idea/modules.xml
        new file:   .idea/workspace.xml
        new file:   README.md


Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git diff --cached
diff --git a/.idea/Git-exercise.iml b/.idea/Git-exercise.iml
new file mode 100644
index 0000000..24643cc
--- /dev/null
+++ b/.idea/Git-exercise.iml
@@ -0,0 +1,12 @@
+<?xml version="1.0" encoding="UTF-8"?>
+<module type="WEB_MODULE" version="4">
+  <component name="NewModuleRootManager">
+    <content url="file://$MODULE_DIR$">
+      <excludeFolder url="file://$MODULE_DIR$/.tmp" />
+      <excludeFolder url="file://$MODULE_DIR$/temp" />
+      <excludeFolder url="file://$MODULE_DIR$/tmp" />
+    </content>
+    <orderEntry type="inheritedJdk" />
+    <orderEntry type="sourceFolder" forTests="false" />
+  </component>
+</module>
\ No newline at end of file
diff --git a/.idea/codeStyles/codeStyleConfig.xml b/.idea/codeStyles/codeStyleConfig.xml
new file mode 100644
index 0000000..a55e7a1
--- /dev/null
+++ b/.idea/codeStyles/codeStyleConfig.xml
@@ -0,0 +1,5 @@
+<component name="ProjectCodeStyleConfiguration">
+  <state>
+    <option name="PREFERRED_PROJECT_CODE_STYLE" value="Default" />
+  </state>
+</component>
\ No newline at end of file
diff --git a/.idea/modules.xml b/.idea/modules.xml
new file mode 100644
index 0000000..061712d
--- /dev/null
+++ b/.idea/modules.xml
@@ -0,0 +1,8 @@
+<?xml version="1.0" encoding="UTF-8"?>
+<project version="4">
+  <component name="ProjectModuleManager">
+    <modules>
+      <module fileurl="file://$PROJECT_DIR$/.idea/Git-exercise.iml" filepath="$PROJECT_DIR$/.idea/Git-exercise.i
ml" />
+    </modules>
+  </component>
+</project>
\ No newline at end of file
diff --git a/.idea/workspace.xml b/.idea/workspace.xml
new file mode 100644
index 0000000..eeecb63
--- /dev/null
+++ b/.idea/workspace.xml
@@ -0,0 +1,37 @@
+<?xml version="1.0" encoding="UTF-8"?>
+<project version="4">
+  <component name="ChangeListManager">
+    <list default="true" id="f07aa4ab-d4f3-4a22-9de2-f2015619d7f7" name="Default Changelist" comment="" />
+    <option name="SHOW_DIALOG" value="false" />
+    <option name="HIGHLIGHT_CONFLICTS" value="true" />
+    <option name="HIGHLIGHT_NON_ACTIVE_CHANGELIST" value="false" />
+    <option name="LAST_RESOLUTION" value="IGNORE" />
+  </component>
+  <component name="ProjectId" id="1j8PxIMt2b3TuN2WtECx9DXwzA5" />
+  <component name="ProjectViewState">
+    <option name="hideEmptyMiddlePackages" value="true" />
+    <option name="showLibraryContents" value="true" />
+  </component>
+  <component name="PropertiesComponent">
+    <property name="RunOnceActivity.OpenProjectViewOnStart" value="true" />
+    <property name="WebServerToolWindowFactoryState" value="false" />
+    <property name="last_opened_file_path" value="$PROJECT_DIR$/../WebStrominTeht" />
+    <property name="nodejs_package_manager_path" value="npm" />
+    <property name="vue.rearranger.settings.migration" value="true" />
+  </component>
+  <component name="SpellCheckerSettings" RuntimeDictionaries="0" Folders="0" CustomDictionaries="0" DefaultDicti
onary="application-level" UseSingleDictionary="true" transferred="true" />
+  <component name="TaskManager">
+    <task active="true" id="Default" summary="Default task">
+      <changelist id="f07aa4ab-d4f3-4a22-9de2-f2015619d7f7" name="Default Changelist" comment="" />
+      <created>1603182990731</created>
+      <option name="number" value="Default" />
+      <option name="presentableId" value="Default" />
+      <updated>1603182990731</updated>
+      <workItem from="1603182991750" duration="104000" />
+    </task>
+    <servers />
+  </component>
+  <component name="TypeScriptGeneratedFilesManager">
+    <option name="version" value="3" />
+  </component>
+</project>
\ No newline at end of file
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..3bd5ff0
--- /dev/null
+++ b/README.md
@@ -0,0 +1,3 @@
+# My Git Notes
+
+Detailed notes showing how to use Git.
\ No newline at end of file

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git commit -m 'added page title and description'
[master (root-commit) 89efd8c] added page title and description
 5 files changed, 65 insertions(+)
 create mode 100644 .idea/Git-exercise.iml
 create mode 100644 .idea/codeStyles/codeStyleConfig.xml
 create mode 100644 .idea/modules.xml
 create mode 100644 .idea/workspace.xml
 create mode 100644 README.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master
nothing to commit, working tree clean

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git log
commit 89efd8c2707e1f0d1af8c654132bd864fc45f55e (HEAD -> master)
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:39:44 2020 +0300

    added page title and description

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .idea/workspace.xml
        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git add .idea/ README.md
warning: LF will be replaced by CRLF in .idea/workspace.xml.
The file will have its original line endings in your working directory

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git commit -m 'Instructions on committing files'
[master c0ac18e] Instructions on committing files
 2 files changed, 9 insertions(+), 2 deletions(-)

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master
$ git log
commit c0ac18efc09b552922c22376f2470ed00084b50c (HEAD -> master)
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:41:56 2020 +0300

    Instructions on committing files

commit 89efd8c2707e1f0d1af8c654132bd864fc45f55e
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:39:44 2020 +0300

    added page title and description

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git log --abbrev-commit
commit c0ac18e (HEAD -> master)
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:41:56 2020 +0300

    Instructions on committing files

commit 89efd8c
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:39:44 2020 +0300

    added page title and description

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git diff 89efd8c..c0ac18e README.md
diff --git a/README.md b/README.md
index 3bd5ff0..850e43b 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,10 @@
 # My Git Notes

-Detailed notes showing how to use Git.
\ No newline at end of file
+Detailed notes showing how to use Git.
+
+## 2.6 Committing Changes
+
+Perform the following steps
+
+1. git add filename
+2. git commit -m "description"
\ No newline at end of file

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README2.md

no changes added to commit (use "git add" and/or "git commit -a")

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git mv README.md README2.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        renamed:    README.md -> README2.md


Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git add README2.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git commit -m "Renamed README file"
[master aea907a] Renamed README file
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename README.md => README2.md (100%)

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master
nothing to commit, working tree clean

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ touch notes.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .idea/workspace.xml
        modified:   README2.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        notes.md

no changes added to commit (use "git add" and/or "git commit -a")

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git add .
warning: LF will be replaced by CRLF in .idea/workspace.xml.
The file will have its original line endings in your working directory

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   .idea/workspace.xml
        modified:   README2.md
        new file:   notes.md


Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git reset HEAD README2.md
Unstaged changes after reset:
M       README2.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   .idea/workspace.xml
        new file:   notes.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README2.md


Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git commit -m "Added notes file"
[master 97b872b] Added notes file
 2 files changed, 2 insertions(+), 1 deletion(-)
 create mode 100644 notes.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README2.md

no changes added to commit (use "git add" and/or "git commit -a")

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git checkout README2.md
Updated 1 path from the index

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git branch -m badcode

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (badcode)
$ git log
commit 97b872b2fc89ab39439a42899c55104e8e2c0591 (HEAD -> badcode)
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:50:07 2020 +0300

    Added notes file

commit aea907a1b39d1f04464ee29deaf5ada6a7266e23
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:47:57 2020 +0300

    Renamed README file

commit c0ac18efc09b552922c22376f2470ed00084b50c
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:41:56 2020 +0300

    Instructions on committing files

commit 89efd8c2707e1f0d1af8c654132bd864fc45f55e
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:39:44 2020 +0300

    added page title and description

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (badcode)
$ git log --abbrev-commit
commit 97b872b (HEAD -> badcode)
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:50:07 2020 +0300

    Added notes file

commit aea907a
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:47:57 2020 +0300

    Renamed README file

commit c0ac18e
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:41:56 2020 +0300

    Instructions on committing files

commit 89efd8c
Author: Mahamurahti <dagility1@gmail.com>
Date:   Tue Oct 20 11:39:44 2020 +0300

    added page title and description

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (badcode)
$ git checkout c0ac18e
Note: switching to 'c0ac18e'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at c0ac18e Instructions on committing files

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise ((c0ac18e...))
$ git checkout -b master
Switched to a new branch 'master'

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git add README.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git commit -m "Final changes to README"
[master c014a58] Final changes to README
 1 file changed, 3 insertions(+), 1 deletion(-)

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git log --graph --all --decorate
* commit c014a584b028e6f158433c1d1f4bdb74b298eb21 (HEAD -> master)
| Author: Mahamurahti <dagility1@gmail.com>
| Date:   Tue Oct 20 11:54:11 2020 +0300
|
|     Final changes to README
|
| * commit 97b872b2fc89ab39439a42899c55104e8e2c0591 (badcode)
| | Author: Mahamurahti <dagility1@gmail.com>
| | Date:   Tue Oct 20 11:50:07 2020 +0300
| |
| |     Added notes file
| |
| * commit aea907a1b39d1f04464ee29deaf5ada6a7266e23
|/  Author: Mahamurahti <dagility1@gmail.com>
|   Date:   Tue Oct 20 11:47:57 2020 +0300
|
|       Renamed README file
|
* commit c0ac18efc09b552922c22376f2470ed00084b50c
| Author: Mahamurahti <dagility1@gmail.com>
| Date:   Tue Oct 20 11:41:56 2020 +0300
|
|     Instructions on committing files
|
* commit 89efd8c2707e1f0d1af8c654132bd864fc45f55e
  Author: Mahamurahti <dagility1@gmail.com>
  Date:   Tue Oct 20 11:39:44 2020 +0300

      added page title and description

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git log --graph --abbrev-commit --decorate --date=relative --all
* commit c014a58 (HEAD -> master)
| Author: Mahamurahti <dagility1@gmail.com>
| Date:   42 seconds ago
|
|     Final changes to README
|
| * commit 97b872b (badcode)
| | Author: Mahamurahti <dagility1@gmail.com>
| | Date:   5 minutes ago
| |
| |     Added notes file
| |
| * commit aea907a
|/  Author: Mahamurahti <dagility1@gmail.com>
|   Date:   7 minutes ago
|
|       Renamed README file
|
* commit c0ac18e
| Author: Mahamurahti <dagility1@gmail.com>
| Date:   13 minutes ago
|
|     Instructions on committing files
|
* commit 89efd8c
  Author: Mahamurahti <dagility1@gmail.com>
  Date:   15 minutes ago

      added page title and description

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git config --global alias.log1 "log --graph --decorate --all"

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git log1
* commit c014a584b028e6f158433c1d1f4bdb74b298eb21 (HEAD -> master)
| Author: Mahamurahti <dagility1@gmail.com>
| Date:   Tue Oct 20 11:54:11 2020 +0300
|
|     Final changes to README
|
| * commit 97b872b2fc89ab39439a42899c55104e8e2c0591 (badcode)
| | Author: Mahamurahti <dagility1@gmail.com>
| | Date:   Tue Oct 20 11:50:07 2020 +0300
| |
| |     Added notes file
| |
| * commit aea907a1b39d1f04464ee29deaf5ada6a7266e23
|/  Author: Mahamurahti <dagility1@gmail.com>
|   Date:   Tue Oct 20 11:47:57 2020 +0300
|
|       Renamed README file
|
* commit c0ac18efc09b552922c22376f2470ed00084b50c
| Author: Mahamurahti <dagility1@gmail.com>
| Date:   Tue Oct 20 11:41:56 2020 +0300
|
|     Instructions on committing files
|
* commit 89efd8c2707e1f0d1af8c654132bd864fc45f55e
  Author: Mahamurahti <dagility1@gmail.com>
  Date:   Tue Oct 20 11:39:44 2020 +0300

      added page title and description

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git tag -a v1.0 -m 'First code release'

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git tag
v1.0

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git tag -a v0.9 -m 'First beta release' c0ac18e

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git tag
v0.9
v1.0

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git log --graph --abbrev-commit --decorate --date=relative --all
* commit c014a58 (HEAD -> master, tag: v1.0)
| Author: Mahamurahti <dagility1@gmail.com>
| Date:   3 minutes ago
|
|     Final changes to README
|
| * commit 97b872b (badcode)
| | Author: Mahamurahti <dagility1@gmail.com>
| | Date:   7 minutes ago
| |
| |     Added notes file
| |
| * commit aea907a
|/  Author: Mahamurahti <dagility1@gmail.com>
|   Date:   9 minutes ago
|
|       Renamed README file
|
* commit c0ac18e (tag: v0.9)
| Author: Mahamurahti <dagility1@gmail.com>
| Date:   15 minutes ago
|
|     Instructions on committing files
|
* commit 89efd8c
  Author: Mahamurahti <dagility1@gmail.com>
  Date:   18 minutes ago

      added page title and description

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git checkout -b newbranch
Switched to a new branch 'newbranch'

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (newbranch)
$ touch newfile.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (newbranch)
$ git status
On branch newbranch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        newfile.md

no changes added to commit (use "git add" and/or "git commit -a")

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (newbranch)
$ git add newfile.md README.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (newbranch)
$ git commit -m "changed to version 2.2"
[newbranch b186659] changed to version 2.2
 2 files changed, 1 insertion(+), 1 deletion(-)
 create mode 100644 newfile.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (newbranch)
$ git log1
* commit b1866594775618cfe3a53b5fd5490fc7e84d6f60 (HEAD -> newbranch)
| Author: Mahamurahti <dagility1@gmail.com>
| Date:   Tue Oct 20 12:01:22 2020 +0300
|
|     changed to version 2.2
|
* commit c014a584b028e6f158433c1d1f4bdb74b298eb21 (tag: v1.0, master)
| Author: Mahamurahti <dagility1@gmail.com>
| Date:   Tue Oct 20 11:54:11 2020 +0300
|
|     Final changes to README
|
| * commit 97b872b2fc89ab39439a42899c55104e8e2c0591 (badcode)
| | Author: Mahamurahti <dagility1@gmail.com>
| | Date:   Tue Oct 20 11:50:07 2020 +0300
| |
| |     Added notes file
| |
| * commit aea907a1b39d1f04464ee29deaf5ada6a7266e23
|/  Author: Mahamurahti <dagility1@gmail.com>
|   Date:   Tue Oct 20 11:47:57 2020 +0300
|
|       Renamed README file
|
* commit c0ac18efc09b552922c22376f2470ed00084b50c (tag: v0.9)
| Author: Mahamurahti <dagility1@gmail.com>
| Date:   Tue Oct 20 11:41:56 2020 +0300
|
|     Instructions on committing files
|
* commit 89efd8c2707e1f0d1af8c654132bd864fc45f55e
  Author: Mahamurahti <dagility1@gmail.com>
  Date:   Tue Oct 20 11:39:44 2020 +0300

      added page title and description

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (newbranch)
$ git checkout master
Switched to branch 'master'

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git merge newbranch
Updating c014a58..b186659
Fast-forward
 README.md  | 2 +-
 newfile.md | 0
 2 files changed, 1 insertion(+), 1 deletion(-)
 create mode 100644 newfile.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git add README.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git commit -m "changed version to 2.1"
[master 0628799] changed version to 2.1
 1 file changed, 1 insertion(+), 1 deletion(-)

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git checkout tags/v0.9
Note: switching to 'tags/v0.9'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at c0ac18e Instructions on committing files

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise ((v0.9))
$

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise ((v0.9))
$

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise ((v0.9))
$ git checkout -b newbranch
fatal: A branch named 'newbranch' already exists.

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise ((v0.9))
$ git checkout -b newnewbranch
Switched to a new branch 'newnewbranch'

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (newnewbranch)
$ touch newnewfile.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (newnewbranch)
$ git status
On branch newnewbranch
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        newnewfile.md

no changes added to commit (use "git add" and/or "git commit -a")

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (newnewbranch)
$ git add newnewfile.md README.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (newnewbranch)
$ git commit -m "changed version to 2.2"
[newnewbranch 3488bdd] changed version to 2.2
 2 files changed, 1 insertion(+), 1 deletion(-)
 create mode 100644 newnewfile.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (newnewbranch)
$ git checkout master
Switched to branch 'master'

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git merge newnewbranch
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master|MERGING)
$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Changes to be committed:
        new file:   newnewfile.md

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   README.md


Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master|MERGING)
$ git commit -m 'README file merged from newnewbranch'
error: Committing is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
hint: as appropriate to mark resolution and make a commit.
fatal: Exiting because of an unresolved conflict.
U       README.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master|MERGING)
$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Changes to be committed:
        new file:   newnewfile.md

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   README.md


Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master|MERGING)
$ git add README.md

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master|MERGING)
$ git commit -m 'README file merged from newnewbranch'
[master 020dee1] README file merged from newnewbranch

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$ git log1
*   commit 020dee19ac1ced8d94e9005aee9831ba4117f154 (HEAD -> master)
|\  Merge: 0628799 3488bdd
| | Author: Mahamurahti <dagility1@gmail.com>
| | Date:   Tue Oct 20 12:06:40 2020 +0300
| |
| |     README file merged from newnewbranch
| |
| * commit 3488bdd18aef740ae0e03ee4cfeb507392d7bb1c (newnewbranch)
| | Author: Mahamurahti <dagility1@gmail.com>
| | Date:   Tue Oct 20 12:04:21 2020 +0300
| |
| |     changed version to 2.2
| |
* | commit 0628799999395d710b4b437828663c9cdebe43d9
| | Author: Mahamurahti <dagility1@gmail.com>
| | Date:   Tue Oct 20 12:02:58 2020 +0300
| |
| |     changed version to 2.1
| |
* | commit b1866594775618cfe3a53b5fd5490fc7e84d6f60 (newbranch)
| | Author: Mahamurahti <dagility1@gmail.com>
| | Date:   Tue Oct 20 12:01:22 2020 +0300
| |
| |     changed to version 2.2
| |
* | commit c014a584b028e6f158433c1d1f4bdb74b298eb21 (tag: v1.0)
|/  Author: Mahamurahti <dagility1@gmail.com>
|   Date:   Tue Oct 20 11:54:11 2020 +0300
|
|       Final changes to README
|
| * commit 97b872b2fc89ab39439a42899c55104e8e2c0591 (badcode)
| | Author: Mahamurahti <dagility1@gmail.com>
| | Date:   Tue Oct 20 11:50:07 2020 +0300
| |
| |     Added notes file
| |
| * commit aea907a1b39d1f04464ee29deaf5ada6a7266e23
|/  Author: Mahamurahti <dagility1@gmail.com>
|   Date:   Tue Oct 20 11:47:57 2020 +0300
|
|       Renamed README file
|
* commit c0ac18efc09b552922c22376f2470ed00084b50c (tag: v0.9)
| Author: Mahamurahti <dagility1@gmail.com>
| Date:   Tue Oct 20 11:41:56 2020 +0300
|
|     Instructions on committing files
|
* commit 89efd8c2707e1f0d1af8c654132bd864fc45f55e
  Author: Mahamurahti <dagility1@gmail.com>
  Date:   Tue Oct 20 11:39:44 2020 +0300

      added page title and description

Eric Keränen@Behemotti MINGW64 ~/Desktop/AMK/Web-sovelluskehitys/Git-exercise (master)
$

```