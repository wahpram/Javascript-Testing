<?php
    $nama = $_POST['nama'];
    $alamat = $_POST['alamat'];
    $notlp = $_POST['no-tlp'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    $jk = $_POST['jenis-kelamin']
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Biodata</title>
    <link rel="stylesheet" href="style_bio.css">
</head>


<body>
    <div class="form-box">
        <h1>Biodata Anda</h1>
        <hr>
        
        <div class="box-user">
            <div>
                <span><b>Nama :</b></span>
                <div class="box-label">
                    <?php echo $nama;?>
                </div>
            </div>

            <div>
                <span><b>Jenis Kelamin :</b></span>
                <div>
                    <?php echo $jk;?>
                </div>
            </div>

            <div>
                <span><b>Alamat :</b></span>
                <div>
                    <?php echo $alamat;?>
                </div>
            </div>

            <div>
                <span><b>No Telepon :</b></span>
                <div>
                    <?php echo $notlp;?>
                </div>
            </div>

            <div>
                <span><b>Email :</b></span>
                <div>
                    <?php echo $email;?>
                </div>
            </div>

            <div>
                <span><b>Password :</b></span>
                <div>
                    <?php echo $pass;?>
                </div>
            </div>

            <form action="index_bio.php" class="nb">
                <button id="submit", name="submit">Back</button>
            </form>
        </div>
    </div>
</body>
</html>