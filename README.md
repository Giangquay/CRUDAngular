1. Run commands node -v

2. Run npm -v 
 > **Note:**If you dont have these - please **install NODE.js** on your machine .
3. Install Angular CLI
`npm i @angular/cli`

4. To create a new application
` ng new <application_name>`

5. To run a command 
`ng serve` **http://localhost:4200**

## Mock data set up
> **Note**API được lưu trữ trên đám mây và điểm cuối giả.

1. Json Server
    - npm i - save json-server && npm i json-server -g  **can we run offline** 
    - json-server --watch db.json 

## Add framework css  (Boostrap) version 4
`npm i bootstrap@4.5.0 @popperjs/core jquery`
    ```
       "styles": [ 
       "src/styles.css",
         "node_modules/bootstrap/dist/css/bootstrap.min.css"
      ],
       "scripts": [
       "node_modules/jquery/dist/jquery.min.js",
       "node_modules/bootstrap/dist/js/bootstrap.min.js"
       ]
    ```
## Creating Features Module
 `ng generate module <module_name>`
1. Create module lazy
  `ng g m module_name --route module_name --module app.module.ts`  
> **Note:** bạn không cần phải thêm lazy module vào app.modules.ts, nếu không nó sẽ được tải lên ngay từ đầu, mà thay vào đó, bạn có thể tạo một routing module riêng để quản lý các tuyến đường cho lazy module.


## create a Service

1. Step 1: Import HttpClientModule into App module.
  * {HttpClientModule} from '@angular/common/httpclient';
2. Generate the service
  * ng generate service
3. Import HttpClient into service
4. Inject HttpClient in contructor
  * contructor(private httpClient:HttpClient)