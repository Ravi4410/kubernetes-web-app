<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kube8ly App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="index.js"></script>
</head>

<body>
    <div class="back">

        <div class="navbar">
            <h1>Welcome to Kube8ly</h1>
        </div>

        <div class="logo">
            <center><img src="Kubernetes-Logo.wine.png"></img>
            </center>
        </div>

    </div>


    <section id=boxes>
        <div class="launch-pod">
            <form action="#output">
                <h3>Launch Pod</h3><br>
                <input name="podname" id="in1" type="text" placeholder="Enter pod name ..." style="width: 80%; height: 9%; margin-bottom:15px" /> <br><br>
                <input name="podimage" id="in2" type="text" placeholder="Enter Image name ..." style="width: 80%; height: 9%; margin-bottom:25px" />
                <button type="reset" onclick="launchPod();" class="btn">Launch</button>
            </form>
        </div>

        <div class="launch-deploy">
            <form action="#output">
                <h3>Launch Deployment </h3><br>
                <input name="deployname" id="in3" type="text" placeholder="Enter Deploy name ..." style="width: 80%; height: 9%; margin-bottom:15px" /> <br><br>
                <input name="deployimage" id="in4" type="text" placeholder="Enter Image name ..." style="width: 80%; height: 9%; margin-bottom:15px" />
                <button type="reset" onclick="launchDeploy();" class="btn">Launch</button>
            </form>
        </div>

        <div class="del-pod">
            <form action="#output">
                <h3>Delete Pod </h3><br>
                <input name="del_podname" id="in5" type="text" placeholder="Enter pod name ..." style="width: 80%; height: 13%; margin-bottom:15px" /> <br><br><br>
                <button type="reset" onclick="delPod();" class="btn">Delete</button>
            </form>
        </div>


        <div class="del-deploy">
            <form action="#output">
                <h3>Delete Deployment</h3><br>
                <input name="del_deployname" id="in6" type="text" placeholder="Enter Deploy name ..." style="width: 80%; height: 13%; margin-bottom:15px" /> <br><br><br>
                <button type="reset" onclick="delDeploy();" class="btn">Delete</button>
            </form>
        </div>

        <div class="scale-deploy">
            <form action="#output">
                <h3>Scale Deployment</h3><br>
                <input name="deploy_name" id="in7" type="text" placeholder="Enter Deploy name ..." style="width: 80%; height: 9%; margin-bottom:15px" /> <br><br>
                <input name="replicas" id="in8" type="number" placeholder="Enter Replica number ..." style="width: 80%; height: 9%; margin-bottom:15px" /> <br><br>
                <button type="reset" onclick="scaleDeploy();" class="btn">Scale</button>
            </form>
        </div>

        <div class="expose-deploy">
            <form action="#output">
                <h3>Expose Deployment</h3><br>
                <input name="expose_deployname" id="in9" type="text" placeholder="Enter Deploy name ..." style="width: 80%; height: 13%; margin-bottom:15px" /> <br><br><br>
                <button type="reset" onclick="exposeDeploy();" class="btn">Expose</button>
            </form>
        </div>
    </section>

    <div id=box>
        <p align="center">
            <button class="btn1" onclick="listPods();">See All Pods</button> &emsp;
            <button class="btn2" onclick="listDeploy();">See All Deployment</button> &emsp;
            <button class="btn2" onclick="listSvc();">See All Services</button> &emsp;
            <button class="btn1" onclick="delRes();">Delete all Pods </button>
        </p>
    </div>


    <div id=output>
        <pre>
        <h3>
        <div class="display-result" id="out"></div>
        </h3>
    </pre>

    </div>



</body>

</html>
