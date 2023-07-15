<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit9d8ddbb1e522e0773b5af831b058b0ae
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Models\\' => 7,
        ),
        'C' => 
        array (
            'Classes\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Models\\' => 
        array (
            0 => __DIR__ . '/../..' . '/../../model',
        ),
        'Classes\\' => 
        array (
            0 => __DIR__ . '/../..' . '/../../class',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit9d8ddbb1e522e0773b5af831b058b0ae::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit9d8ddbb1e522e0773b5af831b058b0ae::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit9d8ddbb1e522e0773b5af831b058b0ae::$classMap;

        }, null, ClassLoader::class);
    }
}
