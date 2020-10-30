## Howto

create new page

```
hugo new posts/new-post.md
```

Run server

```
hugo server
```

Deploy

```
git pull
```

if (any changes on /root)

```
git add . && git commit -m "update app" && git push
```

Update all changes via forestry

---not using this
    readd submodule:
    
```
git submodule add -b master --force https://github.com/fajaragngn/fajaragngn.github.io.git public
```

```
./deploy.sh
```
