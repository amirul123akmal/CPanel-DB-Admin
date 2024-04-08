<?php 
require_once 'config.php';

class database {
    
    public $access;
    public $returningData;

    function __construct()
    {
        try {
            $this->access = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
            if ($this->access->connect_error) {
                die("Connection failed: " . $this->access->connect_error);
                echo "<script>console.log('Connection to database failed. Please contact admin at https://amirul-hub.com/#contact')</script>";
            }
        } catch (\Throwable $th) {
            echo "<script>console.log('Connection to database failed. Please contact admin at https://amirul-hub.com/#contact')</script>";
        }
    }

    function query($query)
    {
        return $this->access->query($query);
    }

    function readDatabase($category, $data)
    {
        $command = '';
        switch($category){
            case 'loginData':
                $pass = md5($data->pass);
                $command = "SELECT * FROM login WHERE user='$data->user' AND pass='$pass'";
                if(($result = $this->query($command)->fetch_assoc()) !== NULL)
                {
                    $this->returningData['transmission'] = 'success';
                    $this->returningData['database'] = $result['data_loc'];
                    $this->returningData['status'] = $result['status'];
                }
                else
                {
                    $this->returningData['transmission'] = 'wrong';
                }
                break;

            case 'createUser':
                $pass = md5($data->pass);
                $command = "INSERT INTO login VALUES(, '$data->user', '$pass', '$data->database', '$data->status')";
                break;
            
            case 'getAllUser':
                $command = "SELECT * FROM login";
                $result = $this->query($command);
                $count = 0;
                $this->returningData['transmission'] = 'success';
                while(($row = $result-> fetch_assoc()) !== NULL)
                {
                    $count++;
                    $this->returningData[$row['user_id']] = $row;
                }
                $this->returningData['count'] = $count;
                break;
        }

        return $this->returningData;
    }
}

?>