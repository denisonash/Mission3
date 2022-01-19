using System;
using System.ComponentModel.DataAnnotations;

namespace AboutMe.Models
{
    public class CalcModel
    {
        //Format:
        //Validator for required field
        //validator for 0 to 100
        //Create the get and set for input variables

        [Required]
        [Range(0,100)]
        public byte Assign { get; set; }

        [Required]
        [Range(0, 100)]
        public byte GP { get; set; }

        [Required]
        [Range(0, 100)]
        public byte Quiz { get; set; }

        [Required]
        [Range(0, 100)]
        public byte Exam { get; set; }

        [Required]
        [Range(0, 100)]
        public byte Intex { get; set; }
    }
}
