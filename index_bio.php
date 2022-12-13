<!DOCTYPE html>
<html lang="en">

<head>
    <title>Form Validasi</title>
    <link rel="stylesheet" href="style_bio.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
</head>


<body>
    <div class="form-box">
        <h1><b>BIODATA</b></h1>
        <hr>

        <form action="show_bio.php", method="post">

            <div class="box-user">
                <input type="text", name="nama", id="nama", required="", placeholder="Nama Anda">
                <label for="nama">Nama Lengkap </label>

                <div class="error visibility-hide" id="nama-error">
                    <p>*nama tidak boleh selain huruf</p>
                </div>

                <i class="fa-solid fa-circle-check visibility-hide", id="checknama"></i>
            </div>
            
            
            <div class="box-user">
                <input type="text", name="alamat", id="alamat", required="", placeholder="Jl xxxxx Nomor xx">
                <label for="alamat">Alamat Lengkap</label>

                <div class="error visibility-hide", id="alamat-error">
                    <p>*alamat hanya menerima input huruf dan angka</p>
                </div>
                
                <i class="fa-solid fa-circle-check visibility-hide", id="checkalamat"></i>
            </div>


            <div class="box-user">
                <input type="tel", name="no-tlp", id="no-tlp", required="", placeholder="08xxxxxxxxx">
                <label for="no telp">Nomor Telepon</label>
                
                <div class="error visibility-hide", id="no-telp-error">
                    <p>*hanya menerima input berupa angka</p>
                </div>
                
                <i class="fa-solid fa-circle-check visibility-hide", id="checktelp"></i>
            </div>


            <div class="box-user">
                <input type="text", name="email", id="email", required="", placeholder="loremipsum123@xxxx.com">
                <label for="email">Email</label>
                
                <div class="error visibility-hide", id="email-error">
                    <p>*email salah!</p>
                </div>
                
                <i class="fa-solid fa-circle-check visibility-hide", id="checkemail"></i>
            </div>

            <div class="box-user">
                <input type="password", name="pass", id="pass", required="", placeholder="LoremIpsum123">
                <label for="pass">Password</label>
                
                <div class="error visibility-hide", id="pass-error">
                    <p>*password hanya boleh mengandung huruf dan angka</p>
                </div>
                
                <i class="fa-solid fa-circle-check visibility-hide", id="checkpass"></i>
                <i class="fa-solid fa-eye-slash", id="togglepass"></i>
            </div>

            <div class="last">
                <p>Jenis Kelamin :</p>
                <input type="radio" id="jk" name="jenis-kelamin" value="Laki-Laki">
                <label for="laki">Laki-Laki</label> &nbsp;
                <input type="radio" id="jk" name="jenis-kelamin" value="Perempuan">
                <label for="perem">Perempuan</label>
            </div>

            <div class="box-user">   
                <button id="submit", name="submit">REGISTER</button>
            </div>

        </form>

    </div>

    <script src="script_bio.js"></script>

</body>

</html>