
$((() => {             

    console.log("jQuery is ready");

    $("button").on("click", () => {
            console.debug("The button is clicked!");
        }
    );

    let value = $("#nbr").val();
    console.log(value);
    value = Number(value) + 3;
    console.log(value);
    $("#nbr").val(value);

    });