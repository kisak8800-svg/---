/* ==================================================
   NOVA Atelier
   CUSTOM CURSOR
================================================== */

@media (hover:hover) and (pointer:fine){

html,
body{

    cursor:none;

}

a,
button{

    cursor:none;

}

.cursor{

    position:fixed;

    left:0;
    top:0;

    width:42px;
    height:42px;

    border:1px solid rgba(214,177,122,.65);

    border-radius:50%;

    transform:translate(-50%,-50%);

    pointer-events:none;

    z-index:9999;

    transition:

        width .35s ease,
        height .35s ease,
        border-color .35s ease,
        background .35s ease;

}

.cursor-dot{

    position:fixed;

    left:0;
    top:0;

    width:6px;
    height:6px;

    background:#D6B17A;

    border-radius:50%;

    transform:translate(-50%,-50%);

    pointer-events:none;

    z-index:10000;

}

.cursor.active{

    width:72px;
    height:72px;

    background:rgba(214,177,122,.08);

}

}
