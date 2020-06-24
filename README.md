# TodoMVC
Tongji Univ. --- Web Programming Course Project. TodoMVC based on native HTML+JS+CSS

## 系统主题自适应

```css
/* default */
.back {background: white; color:  #555;text-align: center}	

/* dark */
@media (prefers-color-scheme: dark) {
  .back {background:  #333; color: white;}
  .models {border:solid 1px #00ff00}
}

/* light */
@media (prefers-color-scheme: light) {
  .back {background: white; color:  #555;}
  .models {border:solid 1px #2b85e4}
}
```

- light
    - 黑: #555
- dark
    - 黑: #333